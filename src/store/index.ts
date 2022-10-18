import type { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseUseStore } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import { UserEntity } from './models';
import UsersModule from './modules/users';

export type RootState = {
  users: UserEntity[];
};

export const key: InjectionKey<Store<RootState>> = Symbol();

const store = createStore<RootState>({
  modules: {
    usersModule: UsersModule,
  },
});

export function useStore() {
  return baseUseStore(key);
}

export const usersModule = getModule(UsersModule, store);

export default store;
