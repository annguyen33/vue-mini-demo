export type User = {
  id: string;
  name: string;
  dateOfBirth: string;
  email: string;
  phone: string;
};

export type UserState = User[];

export const UsersModule = {
  namespaced: true,
  state: () => {
    return [
      {
        id: '1',
        name: 'Nguyễn Phúc Ân 1',
        dateOfBirth: '03/03/2000',
        email: 'phucan332000@gmail.com',
        phone: '0345222577',
      },
      {
        id: '',
        name: 'Nguyễn Phúc Ân 2',
        dateOfBirth: '03/03/2000',
        email: 'phucan332000@gmail.com',
        phone: '0345222577',
      },
    ] as UserState;
  },

  mutations: {
    addUser: (state: UserState, user: User) => {
      state.push(user);
    },
  },
};
