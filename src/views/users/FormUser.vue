<template>
  <Modal @close-modal="emit('toggleModal')" :modal-active="modalActive">
    <template v-slot:title> {{ user ? 'Update user' : 'Add new user' }} </template>
    <template v-slot:content>
      <div class="container">
        <form @submit.prevent="onSubmit">
          <div class="body">
            <CustomInput type="text" label="Name:" v-model="name" :errors="v.name.$errors" />
            <CustomInput type="date" label="Date of Birth:" v-model="dateOfBirth" :errors="v.dateOfBirth.$errors" />
            <CustomInput type="text" label="Email:" v-model.trim()="email" :errors="v.email.$errors" />
            <CustomInput type="text" label="Phone:" v-model="phone" :errors="v.phone.$errors" />
          </div>
          <div class="modal-action">
            <button class="custom-btn" type="submit">{{ user ? 'Update' : 'Add' }}</button>
            <router-link :to="{ name: 'users' }">
              <button class="custom-btn-1" @click="$emit('toggleModal')" type="button">Close</button>
            </router-link>
          </div>
        </form>
      </div>
    </template>
  </Modal>
</template>

<script setup lang="ts">
import Modal from '../../components/VueModal.vue';
import CustomInput from '../../components/CustomInput.vue';
import { v4 as uuid } from 'uuid';
import { defineEmits, onBeforeMount, ref, watch } from 'vue';
import { required, helpers, email as emailV, numeric, minLength, maxLength } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
import { useRouter, useRoute } from 'vue-router';
import { usersModule } from '@/store';

// route & store
const router = useRouter();
const route = useRoute();
const { userId } = route.params;
const user = usersModule.getUser(userId as string);

// define props and event
const modalActive = ref(false);
const name = ref(user ? user.name : '');
const dateOfBirth = ref(user ? user.dateOfBirth : '');
const email = ref(user ? user.email : '');
const phone = ref(user ? user.phone : '');
const emit = defineEmits<{ (e: 'toggleModal'): void }>();

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

const v = useVuelidate(rules, { name, email, dateOfBirth, phone });

async function onSubmit() {
  const validate = await v.value.$validate();
  if (!validate) return;

  if (user) {
    usersModule.editUser({
      id: user.id,
      newUser: { ...user, name: name.value, dateOfBirth: dateOfBirth.value, email: email.value, phone: phone.value },
    });
  } else {
    usersModule.addUser({
      id: uuid(),
      name: name.value,
      dateOfBirth: dateOfBirth.value,
      email: email.value,
      phone: phone.value,
    });
  }
  router.back();
}

onBeforeMount(() => {
  checkModal();
});

watch(
  () => userId,
  () => {
    checkModal();
  },
);

function checkModal() {
  if (userId || route.path.includes('/add')) {
    modalActive.value = true;
  } else {
    modalActive.value = false;
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/views/users/users';
@import '../../styles/components/vueModal';
</style>
