export abstract class LoadingValue<T> {
  protected constructor(private _value: T | null, private _state: LoadingValueState) {}

  public get state() {
    return this._state;
  }

  public get value() {
    return this._value;
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
