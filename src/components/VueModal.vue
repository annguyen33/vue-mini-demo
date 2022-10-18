<template>
  <div class="modal" :class="{ open: modalActive }">
    <div class="modal-inner">
      <div class="modal-header">
        <div></div>
        <h5 class="modal-title"><slot name="title"></slot></h5>
        <router-link :to="{ name: 'users' }">
          <i @click="$emit('close-modal')" class="far fa-times-circle"> </i>
        </router-link>
      </div>
      <!-- Modal Content -->
      <div class="modal-content">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
defineProps<{ modalActive: boolean }>();
</script>

<style lang="scss" scoped>
@import '../styles/components/vueModal';
</style>
