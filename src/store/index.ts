import type { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseUseStore } from 'vuex';
import { UsersModule } from './users/UsersModule';

export type RootState = {
  users: ReturnType<typeof UsersModule.state>;
};

export const key: InjectionKey<Store<RootState>> = Symbol();

const store = createStore({
  modules: {
    users: UsersModule,
  },
});

export function useStore() {
  return baseUseStore(key);
}

export default store;
