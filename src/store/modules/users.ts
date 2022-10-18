import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { UserEntity } from '../models';

const usersDefault = [
  {
    id: '60721bfd-41b2-493d-a9fe-2595689e475c',
    name: 'Nguyễn Phúc Ân 1',
    dateOfBirth: '2022-10-14',
    email: 'phucan332000@gmail.com',
    phone: '0345222577',
  },
  {
    id: '6ad710d1-34b7-4d25-822c-2772af89b162',
    name: 'Nguyễn Phúc Ân 2',
    dateOfBirth: '2022-10-15',
    email: 'phucan332000@gmail.com',
    phone: '0345222577',
  },
];

@Module({ namespaced: true, name: 'usersModule' })
export default class UsersModule extends VuexModule {
  users: UserEntity[] = usersDefault;
  loadingStatus = false;

  // Getter
  get getUser() {
    return (userId: string) => {
      const user = this.users.find(user => user.id === userId);
      if (user) return user;
      return null;
    };
  }

  // Mutation
  @Mutation
  loadStatus(loadingStatus: boolean) {
    this.loadingStatus = loadingStatus;
  }

  @Mutation
  addUser(newUser: UserEntity) {
    this.users.push(newUser);
  }

  @Mutation
  editUser(payload: { id: string; newUser: UserEntity }) {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id === payload.id) {
        this.users[i] = payload.newUser;
      }
    }
  }

  @Mutation
  deleteUser(payload: { id: string }) {
    const user = this.users.find(user => user.id === payload.id);
    if (user) this.users.splice(this.users.indexOf(user), 1);
  }

  // Action
  @Action
  async fetchNewUsers(userId: string) {
    const users = await this.getUser(userId);
    this.context.commit('addUser', users);
  }
}
