import axios from 'axios';
import { RefreshAnswerDto } from '../auth/AuthDto';

const $host = axios.create({ baseURL: process.env.API_URL });

const $authHost = axios.create({ baseURL: process.env.API_URL });

const innerAuthHost = axios.create({ baseURL: process.env.API_URL });
innerAuthHost.interceptors.request.use((config) => {
  config.headers = {};
  config.headers!['Authorization'] = `Bearer  ${localStorage.getItem('access')}`;
  return config;
});

$authHost.interceptors.request.use((config) => {
  config.headers!['Authorization'] = `Bearer  ${localStorage.getItem('access')}`;
  return config;
});
//TODO check if refreshToken was expired before send it
$authHost.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status == 401 && error.config && !error.config._isRetry) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.patch<RefreshAnswerDto>(`${process.env.API_URL}auth/refresh`, {
          refreshToken: localStorage.getItem('refresh'),
        });
        localStorage.setItem('access', response.data.accessToken);
        localStorage.setItem('refresh', response.data.refreshToken);
        return innerAuthHost.request(originalRequest);
      } catch (e) {
        if (axios.isAxiosError(e) && e.response!.status == 401) return { data: null };
        throw e;
      }
    }
    throw error;
  },
);
export { $host, $authHost };
