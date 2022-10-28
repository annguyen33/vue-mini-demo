<template>
  <router-link :to="{ name: 'product', params: { productId: product.id } }">
    <div class="product">
      <img src="../assets/headphone.jpg" />
      <h5 class="product-title">{{ product.name }}</h5>
      <p class="product-subtitle">{{ product.description }}</p>
      <p class="product-price">${{ product.price }}</p>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import type { ProductEntity } from '@/store/models';

defineProps<{ product: ProductEntity }>();
</script>

<style lang="scss" scoped>
@import '../styles/views/products/products';
</style>
