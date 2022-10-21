import { ProductEntity } from '@/store/models';
import api from '..';

const productsApi = {
  getAll(): Promise<ProductEntity[]> {
    return api.get('/products');
  },

  get: (id: string) => {
    return api.get(`/products/${id}`);
  },

  getAsync: (name: string) => {
    return api.get(`/products?name=${name}`);
  },

  addProduct(product: ProductEntity) {
    return api.post(`/products`, product);
  },

  updateProduct(product: ProductEntity) {
    return api.put(`/products/${product.id}`, product);
  },

  deleteProduct(id: string) {
    return api.delete(`/products/${id}`);
  },
};

export default productsApi;
