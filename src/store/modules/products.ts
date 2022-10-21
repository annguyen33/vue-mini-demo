import productsApi from '@/api/productsApi';
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import { ProductEntity } from '../models';

@Module({ namespaced: true, name: 'productsModule' })
export default class ProductsModule extends VuexModule {
  products: ProductEntity[] = [];

  // Getter
  get getProduct() {
    return (productId: string) => {
      const product = this.products.find(product => product.id === productId);
      if (product) return product;
      return null;
    };
  }

  // Action
  @Action({ commit: 'setProducts' })
  async loadProducts() {
    return await productsApi.getAll();
  }

  @Action
  async addProduct(newProduct: ProductEntity) {
    await productsApi.addProduct(newProduct);
    this.loadProducts();
  }

  @Action
  async updateProduct(payload: { id: string; newProduct: ProductEntity }) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === payload.id) {
        await productsApi.updateProduct(payload.newProduct);
        this.loadProducts();
      }
    }
  }

  @Action
  async deleteProduct(id: string) {
    await productsApi.deleteProduct(id);
    this.loadProducts();
  }

  // Mutation
  @Mutation
  setProducts(products: ProductEntity[]) {
    this.products.length = 0;
    this.products.push(...products);
  }
}
