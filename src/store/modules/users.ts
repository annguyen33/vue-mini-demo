import usersApi from '@/api/usersApi';
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { UserEntity } from '../models';

@Module({ namespaced: true, name: 'usersModule' })
export default class UsersModule extends VuexModule {
  users: UserEntity[] = [];

  // Getter
  get getUser() {
    return (userId: string) => {
      const user = this.users.find(user => user.id === userId);
      if (user) return user;
      return null;
    };
  }

  // Action
  @Action({ commit: 'setUsers' })
  async loadUsers() {
    return await usersApi.getAll();
  }

  @Action
  async addUser(newUser: UserEntity) {
    await usersApi.addUser(newUser);
    this.loadUsers();
  }

  @Action
  async updateUser(payload: { id: string; newUser: UserEntity }) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id === payload.id) {
        await usersApi.updateUser(payload.newUser);
        this.loadUsers();
      }
    }
  }

  @Action
  async deleteUser(id: string) {
    await usersApi.deleteUser(id);
    this.loadUsers();
  }

  // Mutation
  @Mutation
  setUsers(users: UserEntity[]) {
    this.users.length = 0;
    this.users.push(...users);
  }
}
