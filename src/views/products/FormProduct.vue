<template>
  <Modal @close-modal="emit('toggleModal')" :modal-active="modalActive">
    <template v-slot:title> {{ product ? 'Update product' : 'Add new product' }} </template>
    <template v-slot:content>
      <div class="container">
        <form @submit.prevent="onSubmit">
          <div class="body">
            <CustomInput type="text" label="Name:" v-model="name" :errors="v.name.$errors" />
            <CustomInput type="text" label="Description:" v-model="description" :errors="v.description.$errors" />
            <CustomInput type="number" label="Price:" v-model="price" :errors="v.price.$errors" />
          </div>
          <div class="modal-action">
            <button class="custom-btn" type="submit">{{ product ? 'Update' : 'Add' }}</button>
            <router-link :to="{ name: 'products' }">
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
import { required, helpers } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
import { useRouter, useRoute } from 'vue-router';
import { productsModule } from '@/store';

// route & store
const router = useRouter();
const route = useRoute();
const { productId } = route.params;
const product = productsModule.getProduct(productId as string);

// define props and event
const modalActive = ref(false);
const name = ref(product ? product.name : '');
const description = ref(product ? product.description : '');
const price = ref(product ? product.price : '');
const emit = defineEmits<{ (e: 'toggleModal'): void }>();

const rules = {
  name: {
    required: helpers.withMessage('Name is required', required),
  },
  description: {
    required: helpers.withMessage('Description is required', required),
  },
  price: {
    required: helpers.withMessage('Price is required', required),
  },
};

const v = useVuelidate(rules, { name, description, price });

async function onSubmit() {
  const validate = await v.value.$validate();

  if (!validate) return;

  if (product) {
    productsModule.updateProduct({
      id: product.id,
      newProduct: { ...product, name: name.value, description: description.value, price: price.value },
    });
  } else {
    productsModule.addProduct({
      id: uuid(),
      name: name.value,
      description: description.value,
      price: price.value,
    });
  }
  router.back();
}

onBeforeMount(() => {
  checkModal();
});

watch(
  () => productId,
  () => {
    checkModal();
  },
);

function checkModal() {
  if (productId || route.path.includes('/add')) {
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
