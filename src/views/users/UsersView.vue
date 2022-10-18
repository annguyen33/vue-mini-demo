<template>
  <TheHeader />
  <ListUser />
  <router-view></router-view>
</template>

<script setup lang="ts">
import TheHeader from '../../components/TheHeader.vue';
import ListUser from './ListUser.vue';
</script>
