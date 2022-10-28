<template>
  <TheHeader />
  <ListProduct />
  <router-view></router-view>
</template>

<script setup lang="ts">
import TheHeader from '../../components/TheHeader.vue';
import ListProduct from './ListProduct.vue';
</script>
