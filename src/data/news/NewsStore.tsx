import { makeAutoObservable, runInAction } from 'mobx';
import { OnePostDto, PostListDto } from './PostDto';
import {
  LoadingValue,
  LoadingValueError,
  LoadingValueLoaded,
  LoadingValueLoading,
} from '../load/LoadedState';
import { $authHost, $host } from '../http/axios';
import axios from 'axios';
import { loadWrapper } from '../load/wrappers/loadWrapper';
import { loadSuccessWrapper } from '../load/wrappers/loadSuccessWrapper';

export class NewsStore {
  constructor() {
    makeAutoObservable(this);
  }

  public Posts: LoadingValue<PostListDto> = new LoadingValueLoading(null);
  public Page: number = 1;

  public async loadAll(page: number, limit: number, tagName: string | undefined) {
    await loadWrapper(
      async () =>
        (
          await $host.get<PostListDto>('posts', {
            params: { page, limit, tagName },
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
