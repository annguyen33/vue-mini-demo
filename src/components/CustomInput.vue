<template>
  <div class="input">
    <label>{{ label }}</label>
    <div class="input-group">
      <input
        :type="type"
        :value="modelValue"
        class="input-group-input"
        @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        :name="name"
      />
      <div v-if="errors && errors.length > 0" class="input-group-error">{{ errors[0].$message }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ErrorObject } from '@vuelidate/core';
import type { Ref } from 'vue';

defineProps<{
  label: string;
  modelValue: string | number | Ref<any>;
  name?: string;
  type: string;
  errors?: ErrorObject[];
}>();
const emit = defineEmits<{ (event: 'update:modelValue', payload: string): void }>();
</script>

<style lang="scss" scoped>
@import '../styles/views/users/users';
</style>
