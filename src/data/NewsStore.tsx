import { makeAutoObservable } from 'mobx';
import { PostDto, PostListItemDto } from './dtos/PostDto';
import { LoadingValue, LoadingValueLoading } from './load/LoadedState';

export class NewsStore {
  constructor() {
    makeAutoObservable(this);
  }

  public Posts: LoadingValue<PostListItemDto[]> = new LoadingValueLoading(null);
  public Page: number = 1;
  public TotalPageCount: number = 1;
}
