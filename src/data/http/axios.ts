import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { RefreshAnswerDto } from '../auth/AuthDto';

const $host = axios.create({ baseURL: process.env.API_URL });

const $innerAuthHost = axios.create({ baseURL: process.env.API_URL });
$innerAuthHost.interceptors.request.use((config) => {
  config.headers!['Authorization'] = `Bearer  ${localStorage.getItem('access')}`;
  return config;
});

const $authWrapper = async <TResult>(
  loader: (a: AxiosInstance) => Promise<AxiosResponse<TResult>>,
): Promise<TResult> => {
  try {
    const response = await loader($innerAuthHost);
    return response.data;
  } catch (e) {
    if (axios.isAxiosError(e) && e.response!.status == 401) {
      const response = await axios.patch<RefreshAnswerDto>(`${process.env.API_URL}auth/refresh`, {
        refreshToken: localStorage.getItem('refresh'),
      });
      localStorage.setItem('access', response.data.accessToken);
      localStorage.setItem('refresh', response.data.refreshToken);
      return (await loader($innerAuthHost)).data;
    }
    throw e;
  }
};

export { $host, $authWrapper };
