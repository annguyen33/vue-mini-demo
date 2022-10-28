import apiJoke from '../apiJoke';

const jokesApi = {
  getJoke() {
    return apiJoke.get('');
  },

  getJokeByID(id: string) {
    return apiJoke.get(`j/${id}`);
  },
};

export default jokesApi;
