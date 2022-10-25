import { InsertionDto, SuccessMessageDto } from '../loadDtos';
import axios from 'axios';

export const loadInsertionWrapper = async (loader: () => Promise<InsertionDto>) => {
  try {
    const res = await loader();
    return res;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      return { success: false, message: e.message } as InsertionDto;
    } else throw e;
  }
};
