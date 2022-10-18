<template>
  <div class="input">
    <label :for="name">{{ label }}</label>

    <div class="input-group">
      <input class="input-group-input" :type="type" v-model="value" />

      <div class="input-group-error" v-show="errorMessage">
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { useField } from 'vee-validate';

const props = defineProps<{ type: string; label: string; name: string }>();
const { value, errorMessage } = useField(props.name);
</script>

<style lang="scss" scoped>
@import '../styles/views/users/users';
</style>
