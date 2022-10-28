import axios from 'axios';

const apiJoke = axios.create({
  baseURL: 'https://icanhazdadjoke.com/',
  headers: {
    Accept: 'application/json',
  },
});

apiJoke.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

apiJoke.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default apiJoke;
