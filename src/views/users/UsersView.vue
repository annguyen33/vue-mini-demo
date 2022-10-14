<template>
  <TheHeader />
  <ListUser @toggle-modal="toggleModal" />
  <FormUser @toggle-modal="toggleModal" :modalActive="modalActive" />
  <router-view></router-view>
</template>

<script setup lang="ts">
import TheHeader from '../../components/TheHeader.vue';
import ListUser from './ListUser.vue';
import FormUser from './FormUser.vue';
import { ref } from 'vue';

const modalActive = ref(false);
const toggleModal = () => {
  modalActive.value = !modalActive.value;
};
</script>
