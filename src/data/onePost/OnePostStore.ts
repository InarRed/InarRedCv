import { makeAutoObservable, runInAction } from 'mobx';
import { LoadingValue, LoadingValueLoading } from '../load/LoadedState';
import { OnePostDto } from '../news/PostDto';
import { loadWrapper } from '../load/wrappers/loadWrapper';
import { $authWrapper, $host } from '../http/axios';
import { loadInsertionWrapper } from '../load/wrappers/loadInsertionWrapper';
import { CommentCreateDto, CommentListItemDto } from '../news/CommentDto';

export class OnePostStore {
  constructor() {
    makeAutoObservable(this);
  }

  private _post: LoadingValue<OnePostDto> = new LoadingValueLoading(null);
  public get post() {
    return this._post;
  }

  public set post(value) {
    this._post = value;
  }

  public async load(id: number) {
    await loadWrapper(
      async () => (await $host.get<OnePostDto>(`posts/${id}`)).data,
      this.post.value,
      (value) => {
        // if (value.value) makeAutoObservable(value.value);
        runInAction(() => {
          this.post = value;
        });
      },
    );
  }

  public async updatePost(post: OnePostDto) {
    return await loadInsertionWrapper<OnePostDto>(
      async () => await $authWrapper((a) => a.patch(`posts/${post.id}`, post)),
    );
  }

  public async deletePost(id: number) {
    return await loadInsertionWrapper(
      async () => await $authWrapper((a) => a.delete(`posts/${id}`)),
    );
  }

  public async sendComment(data: CommentCreateDto) {
    const result = await loadInsertionWrapper<CommentListItemDto>(
      async () => await $authWrapper((a) => a.post('comments', data)),
    );
    if (result.success && result.inserted && this.post.value) {
      this.post.value.comments.push(result.inserted);
    }
    return result;
  }

  public async deleteComment(id: number) {
    const result = await loadInsertionWrapper(
      async () => await $authWrapper((a) => a.delete(`comments/${id}`)),
    );
    if (result.success && this.post.value) {
      const index = this.post.value.comments.findIndex((dto) => dto.id == id);
      this.post.value.comments.splice(index, 1);
    }
    return result;
  }
}
