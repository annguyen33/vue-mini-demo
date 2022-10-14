<template>
  <TheHeader />
  <ListProduct />
  <router-view></router-view>
</template>

<script>
import ListProduct from '../views/products/ListProduct.vue';
import TheHeader from '../components/TheHeader.vue';

export default {
  components: {
    ListProduct,
    TheHeader,
  },
};
</script>
