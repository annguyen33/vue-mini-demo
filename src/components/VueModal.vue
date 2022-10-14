<template>
  <transition name="modal-animation">
    <div v-show="props.modalActive" class="modal">
      <transition name="modal-animation-inner">
        <div v-show="modalActive" class="modal-inner">
          <h5>Add New User</h5>
          <router-link :to="{ name: 'users' }">
            <i @click="$emit('close')" class="far fa-times-circle"> </i>
          </router-link>
          <!-- Modal Content -->
          <div class="modal-content">
            <slot />
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
const props = defineProps<{
  modalActive: boolean;
}>();

defineEmits<{ (e: 'close'): void }>();
</script>

<style lang="scss" scoped>
@import '../styles/components/vueModal';
</style>
