import axios from 'axios';

const axiosClient = axios.create({
  baseURL: '',
  headers: {
    Accept: 'application/json',
  },
});

export const get = async (api: string, params: object) => {
  const request = await axiosClient.get(api, params);
  if (request.data) {
    return request.data;
  }

  return request;
};

export default axiosClient;
