<template>
  <div class="product-header">
    <div class="product-header-title">List Product</div>
    <div class="product-header-action">
      <button class="custom-btn" style="margin-right: 10px">
        <router-link :to="{ name: 'products-add' }"> Add new (vuelidate) </router-link>
      </button>
    </div>
  </div>
  <div class="container">
    <ProductCard v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<script setup lang="ts">
import ProductCard from '../../components/ProductCard.vue';
import { productsModule } from '@/store';

const { products } = productsModule;

productsModule.loadProducts();
</script>

<style lang="scss" scoped>
@import '../../styles/views/products/products';
</style>
