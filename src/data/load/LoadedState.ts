export class LoadingValue<T> {
  constructor(public state: LoadingValueState) {}
}

enum LoadingValueState {
  Loading,
  Loaded,
  Error,
}

export class LoadingValueLoading<T> extends LoadingValue<T> {
  constructor(public value: T | null) {
    super(LoadingValueState.Loading);
  }
}

export class LoadingValueLoaded<T> extends LoadingValue<T> {
  constructor(public value: T) {
    super(LoadingValueState.Loaded);
  }
}

export class LoadingValueError<T> extends LoadingValue<T> {
  constructor(public value: T | null, public message: string, public error?: Error) {
    super(LoadingValueState.Error);
  }
}
