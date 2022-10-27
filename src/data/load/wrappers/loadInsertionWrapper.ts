import { InsertionDto } from '../loadDtos';
import axios from 'axios';

export const loadInsertionWrapper = async <TInserted>(
  loader: () => Promise<InsertionDto<TInserted>>,
) => {
  try {
    const res = await loader();
    return res;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      return { success: false, message: e.message } as InsertionDto<TInserted>;
    } else throw e;
  }
};
