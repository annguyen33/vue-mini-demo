<template>
  <Modal @close="$emit('toggleModal')" :modalActive="props.modalActive">
    <template v-slot:header> Modal Header </template>
    <div class="modal-content">
      <div class="container">
        <form @submit.prevent="onSubmit">
          <div class="body">
            <CustomInput type="text" label="Name:" v-model="name" :errors="v.name.$errors" />
            <CustomInput type="date" label="Date of Birth:" v-model="dateOfBirth" :errors="v.dateOfBirth.$errors" />
            <CustomInput type="text" label="Email:" v-model.trim()="email" :errors="v.email.$errors" />
            <CustomInput type="text" label="Phone:" v-model="phone" :errors="v.phone.$errors" />
          </div>
          <div class="footer">
            <div class="modal-action">
              <button class="custom-btn" type="submit">Add</button>
              <router-link :to="{ name: 'users' }">
                <button class="custom-btn-1" @click="$emit('toggleModal')" type="button">Close</button>
              </router-link>
            </div>
          </div>
        </form>
      </div>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import Modal from '@/components/VueModal.vue';
import CustomInput from '@/components/CustomInput.vue';
import { v4 as uuid } from 'uuid';
import { defineProps, defineEmits, ref } from 'vue';
import { required, helpers, email as emailV, numeric, minLength, maxLength } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
import { useStore } from '@/store';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();

const props = defineProps(['modalActive']);
defineEmits(['toggleModal']);

const name = ref('');
const dateOfBirth = ref('');
const email = ref('');
const phone = ref('');

const rules = {
  name: {
    required: helpers.withMessage('Name is required', required),
  },
  dateOfBirth: {
    required: helpers.withMessage('Date of Birth is required', required),
  },
  email: {
    required: helpers.withMessage('Email is required', required),
    emailV: helpers.withMessage('Email must be valid', emailV),
  },
  phone: {
    required: helpers.withMessage('Phone is required', required),
    numeric: helpers.withMessage('Phone must be number', numeric),
    minLength: minLength(10),
    maxLength: maxLength(12),
  },
};

const v = useVuelidate(rules, { id: uuid(), name, dateOfBirth, email, phone });

async function onSubmit(e: Event) {
  const validateResult = await v.value.$validate();
  if (!validateResult) return;
  console.log({ id: uuid(), name, dateOfBirth, email, phone });

  store.commit('users/add', { id: uuid(), name, dateOfBirth, email, phone });
  router.replace('/products');
}
</script>

<style lang="scss" scoped>
@import '../../styles/views/users/users';
@import '../../styles/components/vueModal';
</style>
