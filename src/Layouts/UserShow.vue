<template>
  <TheHeader />
  <ListUser @toggle-modal="toggleModal" />
  <Modal @close="toggleModal" :modalActive="modalActive">
    <div class="modal-content">
      <FormUser />
      <div class="modal-action">
        <button class="custom-btn" @click="toggleModal" type="button">Add</button>
        <button class="custom-btn-1" @click="toggleModal" type="button">Close</button>
      </div>
    </div>
  </Modal>
  <router-view></router-view>
</template>

<script setup lang="ts">
import Modal from '@/components/VueModal.vue';
import TheHeader from '@/components/TheHeader.vue';
import ListUser from '@/views/users/ListUser.vue';
import FormUser from '@/views/users/FormUser.vue';
import { ref } from 'vue';

const modalActive = ref(false);
const toggleModal = () => {
  modalActive.value = !modalActive.value;
};
</script>

<style lang="scss" scoped>
@import '@/styles/components/vueModal';
</style>
