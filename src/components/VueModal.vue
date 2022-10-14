<template>
  <transition name="modal-animation">
    <div v-show="props.modalActive" class="modal">
      <transition name="modal-animation-inner">
        <div v-show="modalActive" class="modal-inner">
          <h5>Add New User</h5>
          <i @click="$emit('close')" class="far fa-times-circle"></i>
          <!-- Modal Content -->
          <slot />
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

const emit = defineEmits<{
  (e: 'close'): void;
}>();
</script>

<style lang="scss" scoped>
@import '../styles/components/vueModal';
</style>
