<template>
  <div class="container">
    <div class="header">
      <div class="header-logo">
        <img src="../assets/logo.png" />
        <router-link :to="{ name: 'home' }"> Mini Demo</router-link>
      </div>
      <div class="header-page">
        <ul>
          <li>
            <router-link :to="{ name: 'users' }" @click="handleChangePage(0)" :class="{ active: selectedItem === 0 }"
              >User Management</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'products' }" @click="handleChangePage(1)" :class="{ active: selectedItem === 1 }"
              >Product Management</router-link
            >
          </li>
        </ul>
      </div>
      <div class="header-left"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const selectedItem = ref(0);
const handleChangePage = (page: number) => {
  selectedItem.value = page;
};
</script>

<style lang="scss" scoped>
@import '../styles/components/header';
</style>
