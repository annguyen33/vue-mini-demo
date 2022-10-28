import type { UserEntity } from '@/store/models';
import api from '..';

const usersApi = {
  getAll(): Promise<UserEntity[]> {
    return api.get('/users');
  },

  get: (id: string) => {
    return api.get(`/users/${id}`);
  },

  getAsync: (name: string) => {
    return api.get(`/users?name=${name}`);
  },

  addUser(user: UserEntity) {
    return api.post(`/users`, user);
  },

  updateUser(user: UserEntity) {
    return api.put(`/users/${user.id}`, user);
  },

  deleteUser(id: string) {
    return api.delete(`/users/${id}`);
  },
};

export default usersApi;
