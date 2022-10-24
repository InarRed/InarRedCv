import { makeAutoObservable, runInAction } from 'mobx';
import { TagDto } from './TagDto';
import { LoadingValue, LoadingValueLoading } from '../load/LoadedState';
import { loadWrapper } from '../load/wrappers/loadWrapper';
import { $host } from '../http/axios';

export class TagsStore {
  constructor() {
    makeAutoObservable(this);
  }

  public tags: LoadingValue<TagDto[]> = new LoadingValueLoading(null);

  public async loadAll() {
    await loadWrapper(
      async () => (await $host.get<TagDto[]>('tags')).data,
      this.tags.value,
      (value) => {
        runInAction(() => (this.tags = value));
      },
    );
  }
}
