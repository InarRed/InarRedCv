import { makeAutoObservable, runInAction } from 'mobx';
import { OnePostDto, PostListDto } from './PostDto';
import {
  LoadingValue,
  LoadingValueError,
  LoadingValueLoaded,
  LoadingValueLoading,
} from '../load/LoadedState';
import { $host } from '../http/axios';
import axios from 'axios';
import { loadWrapper } from '../load/loadWrapper';

export class NewsStore {
  constructor() {
    makeAutoObservable(this);
  }

  public Posts: LoadingValue<PostListDto> = new LoadingValueLoading(null);
  public Page: number = 1;

  public async getAll(page: number, limit: number) {
    runInAction(() => {
      this.Posts = new LoadingValueLoading(this.Posts.value);
    });

    try {
      const { data } = await $host.get<PostListDto>('posts', {
        params: { page: page, limit: limit },
      });
      // await new Promise((r) => setTimeout(r, 2000));
      runInAction(() => {
        this.Posts = new LoadingValueLoaded(data);
      });
    } catch (e) {
      runInAction(() => {
        if (axios.isAxiosError(e)) {
          this.Posts = new LoadingValueError(this.Posts.value, e.message, e);
        }
      });
    }
  }

  public async getOnePost(id: number, setPost: (post: LoadingValue<OnePostDto>) => void) {
    await loadWrapper(async () => (await $host.get<OnePostDto>(`posts/${id}`)).data, null, setPost);
  }
}
