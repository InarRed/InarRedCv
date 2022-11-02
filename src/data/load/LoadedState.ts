import { makeObservable, observable } from 'mobx';

export abstract class LoadingValue<T> {
  protected constructor(public value: T | null, private _state: LoadingValueState) {
    makeObservable(this, { value: observable });
  }

  public get state() {
    return this._state;
  }
}

export enum LoadingValueState {
  Loading,
  Loaded,
  Error,
}

export class LoadingValueLoading<T> extends LoadingValue<T> {
  constructor(value: T | null) {
    super(value, LoadingValueState.Loading);
  }
}

export class LoadingValueLoaded<T> extends LoadingValue<T> {
  constructor(value: T) {
    super(value, LoadingValueState.Loaded);
  }
}

export class LoadingValueError<T> extends LoadingValue<T> {
  constructor(value: T | null, public message: string, public error?: Error) {
    super(value, LoadingValueState.Error);
  }
}
