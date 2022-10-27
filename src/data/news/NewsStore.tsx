import { makeAutoObservable, runInAction } from 'mobx';
import { OnePostDto, PostCreateDto, PostListDto } from './PostDto';
import {
  LoadingValue,
  LoadingValueError,
  LoadingValueLoaded,
  LoadingValueLoading,
} from '../load/LoadedState';
import { $authHost, $host } from '../http/axios';
import axios, { AxiosError } from 'axios';
import { loadWrapper } from '../load/wrappers/loadWrapper';
import { loadSuccessWrapper } from '../load/wrappers/loadSuccessWrapper';
import { InsertionDto } from '../load/loadDtos';

export class NewsStore {
  constructor() {
    makeAutoObservable(this);
  }

  public Posts: LoadingValue<PostListDto> = new LoadingValueLoading(null);
  public Page: number = 1;

  public async loadAll(
    page: number,
    limit: number,
    published: boolean,
    tagName: string | undefined,
  ) {
    await loadWrapper(
      async () =>
        (
          await $host.get<PostListDto>('posts', {
            params: { page, limit, tagName, notPublished: published ? undefined : true },
          })
        ).data,
      this.Posts.value,
      (value) => {
        this.Posts = value;
      },
    );
  }

  public async getOnePost(id: number, setPost: (post: LoadingValue<OnePostDto>) => void) {
    await loadWrapper(async () => (await $host.get<OnePostDto>(`posts/${id}`)).data, null, setPost);
  }

  public async create(): Promise<string> {
    const post = {
      title: 'title',
      content: 'content',
      contentPreview: 'content preview',
      publicationDate: null,
      tags: [],
    } as PostCreateDto;
    const data = (await $authHost.post<InsertionDto<OnePostDto>>('posts', post)).data;
    return `/news/post/${data.inserted?.id}`;
  }

  public async update(post: OnePostDto) {
    return await loadSuccessWrapper(
      async () => {
        await $authHost.patch(`posts/${post.id}`, post);
      },
      'Saved successfully',
      (err) => `Error: ${err}`,
    );
  }
}
