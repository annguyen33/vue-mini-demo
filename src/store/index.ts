import type { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseUseStore } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import { ProductEntity, UserEntity } from './models';
import LoaderModule from './modules/loader';
import ProductsModule from './modules/products';
import UsersModule from './modules/users';

export type RootState = {
  users: UserEntity[];
  products: ProductEntity[];
  loaderModule: LoaderModule;
};

export const key: InjectionKey<Store<RootState>> = Symbol();

const store = createStore<RootState>({
  modules: {
    usersModule: UsersModule,
    productsModule: ProductsModule,
    loaderModule: LoaderModule,
  },
});

export function useStore() {
  return baseUseStore(key);
}

export const usersModule = getModule(UsersModule, store);
export const productsModule = getModule(ProductsModule, store);
export const loaderModule = getModule(LoaderModule, store);

export default store;
