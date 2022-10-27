import { makeAutoObservable, runInAction } from 'mobx';
import { TagDto } from './TagDto';
import { LoadingValue, LoadingValueLoading } from '../load/LoadedState';
import { loadWrapper } from '../load/wrappers/loadWrapper';
import { $authHost, $host } from '../http/axios';
import { loadInsertionWrapper } from '../load/wrappers/loadInsertionWrapper';
import { InsertionDto } from '../load/loadDtos';

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

  public async createTag(name: string) {
    return await loadInsertionWrapper(
      async () => (await $authHost.post<InsertionDto<TagDto>>('tags', { name })).data,
    );
  }
}
