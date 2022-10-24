import axios from 'axios';
import { SuccessMessageDto } from '../loadDtos';

export const loadSuccessWrapper = async (
  loader: () => Promise<void>,
  successMessage: string,
  notSuccessMessage: (err: string) => string,
) => {
  try {
    await loader();
    return { success: true, message: successMessage } as SuccessMessageDto;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      return { success: false, message: notSuccessMessage(e.message) } as SuccessMessageDto;
    } else throw e;
  }
};
