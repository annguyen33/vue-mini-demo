import productsApi from '@/api/productsApi';
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import type { ProductEntity } from '../models';

@Module({ namespaced: true, name: 'productsModule' })
export default class ProductsModule extends VuexModule {
  products: ProductEntity[] = [];
  loadingStatus = false;

  // Getter
  get getProduct() {
    return (productId: string) => {
      const product = this.products.find(product => product.id === productId);
      if (product) return product;
      return null;
    };
  }

  // Action
  @Action
  async loadProducts() {
    try {
      this.context.commit('setLoadingStatus', true);
      const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
      await delay(1000);
      const products = await productsApi.getAll();
      this.context.commit('setProducts', products);
    } catch (error) {
      console.log(error);
    } finally {
      this.context.commit('setLoadingStatus', false);
    }
  }

  @Action
  async addProduct(newProduct: ProductEntity) {
    try {
      this.context.commit('setLoadingStatus', true);
      const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
      await delay(1000);
      await productsApi.addProduct(newProduct);
    } catch (error) {
      console.log(error);
    } finally {
      this.context.commit('setLoadingStatus', false);
      this.loadProducts();
    }
  }

  @Action
  async updateProduct(payload: { id: string; newProduct: ProductEntity }) {
    try {
      this.context.commit('setLoadingStatus', true);
      const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
      await delay(1000);
      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].id === payload.id) {
          await productsApi.updateProduct(payload.newProduct);
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      this.context.commit('setLoadingStatus', false);
      this.loadProducts();
    }
  }

  // Mutation
  @Mutation
  setProducts(products: ProductEntity[]) {
    this.products.length = 0;
    this.products.push(...products);
  }

  @Mutation
  setLoadingStatus(status: boolean) {
    this.loadingStatus = status;
  }
}
