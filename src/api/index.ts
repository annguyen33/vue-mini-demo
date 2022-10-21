import { loaderModule } from '@/store';
import axios, { AxiosInstance, AxiosResponse } from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
});

api.interceptors.request.use(
  async config => {
    loaderModule.changeLoading(true);
    return config;
  },
  error => {
    loaderModule.changeLoading(false);
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response && response.data) {
      loaderModule.changeLoading(false);
      return response.data;
    }
    loaderModule.changeLoading(false);

    return response;
  },
  error => {
    loaderModule.changeLoading(false);
    return Promise.reject(error);
  },
);

export default api;
