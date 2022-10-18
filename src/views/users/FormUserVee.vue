<template>
  <Modal @close-modal="emit('toggleModal')" :modal-active="modalActive">
    <template v-slot:title> Add new user (vee-validate) </template>
    <template v-slot:content>
      <div class="container">
        <form @submit="onSubmit">
          <div class="body">
            <CustomInputVee type="text" label="Name:" name="name" />
            <CustomInputVee type="date" label="Date of Birth:" name="dateOfBirth" />
            <CustomInputVee type="text" label="Email:" name="email" />
            <CustomInputVee type="text" label="Phone:" name="phone" />
          </div>
          <div class="modal-action">
            <button type="submit" :class="[!meta.valid ? 'disabled-btn' : 'custom-btn']" :disabled="!meta.valid">
              {{ user ? 'Update' : 'Add' }}
            </button>
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
import CustomInputVee from '../../components/CustomInputVee.vue';
import { v4 as uuid } from 'uuid';
import { defineEmits, onBeforeMount, ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { usersModule } from '@/store';
import * as yup from 'yup';
import { useForm } from 'vee-validate';

// route & store
const router = useRouter();
const route = useRoute();
const { userId } = route.params;
const user = usersModule.getUser(userId as string);

const schema = yup.object({
  name: yup.string().required().trim(),
  dateOfBirth: yup.string().required('date of birth is a required field'),
  email: yup.string().email().required().trim(),
  phone: yup.number().required().typeError('phone must be number'),
});

const { handleSubmit, values, meta } = useForm({
  validationSchema: schema,
  initialValues: {
    name: user ? user.name : '',
    dateOfBirth: user ? user.dateOfBirth : '',
    email: user ? user.email : '',
    phone: user ? user.phone : '',
  },
});

// define props and event
const modalActive = ref(false);
const emit = defineEmits<{ (e: 'toggleModal'): void }>();

const onSubmit = handleSubmit(async () => {
  if (user) {
    usersModule.editUser({
      id: user.id,
      newUser: {
        ...user,
        name: values.name,
        dateOfBirth: values.dateOfBirth,
        email: values.email,
        phone: values.phone,
      },
    });
  } else {
    usersModule.addUser({
      id: uuid(),
      name: values.name,
      dateOfBirth: values.dateOfBirth,
      email: values.email,
      phone: values.phone,
    });
  }
  router.back();
});

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
