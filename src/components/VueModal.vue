<template>
  <div class="modal" :class="{ open: modalActive }">
    <div class="modal-inner">
      <div class="modal-header">
        <div></div>
        <h5 class="modal-title"><slot name="title"></slot></h5>
        <i
          @click="
            $emit('close-modal');
            router.back();
          "
          class="far fa-times-circle"
        >
        </i>
      </div>
      <!-- Modal Content -->
      <div class="modal-content">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

defineProps<{ modalActive: boolean }>();
const router = useRouter();
</script>

<style lang="scss" scoped>
@import '../styles/components/vueModal';
</style>
