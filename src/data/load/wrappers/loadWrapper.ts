import {
  LoadingValue,
  LoadingValueError,
  LoadingValueLoaded,
  LoadingValueLoading,
} from '../LoadedState';
import axios from 'axios';

export const loadWrapper = async <T>(
  loader: () => Promise<T>,
  previousLoadingValue: T | null,
  setLoadingValue: (value: LoadingValue<T>) => void,
) => {
  setLoadingValue(new LoadingValueLoading(previousLoadingValue));
  try {
    const data = await loader();
    //await new Promise((r) => setTimeout(r, 2000));
    setLoadingValue(new LoadingValueLoaded(data));
  } catch (e) {
    if (axios.isAxiosError(e)) {
      setLoadingValue(new LoadingValueError(previousLoadingValue, e.message, e));
    } else {
      throw e;
    }
  }
};
