<template>
  <div class="list">
    <div class="list-header">
      <div class="list-header-title">List User</div>
      <div class="list-header-action">
        <button class="custom-btn" @click="$emit('toggleModal')">
          <router-link :to="{ name: 'users-add' }"> Add new </router-link>
        </button>
      </div>
    </div>
    <div class="list-user">
      <table>
        <thead>
          <tr>
            <th align="left">id</th>
            <th align="left">Name</th>
            <th align="left">Date of Birth</th>
            <th align="left">Email</th>
            <th align="left">Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.dateOfBirth }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.phone }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, ref } from 'vue';
defineEmits(['toggleModal']);
const users = ref([
  {
    id: 1,
    name: 'Nguyễn Phúc Ân 1',
    dateOfBirth: '03/03/2000',
    email: 'phucan332000@gmail.com',
    phone: '0345222577',
  },
  {
    id: 2,
    name: 'Nguyễn Phúc Ân 2',
    dateOfBirth: '03/03/2000',
    email: 'phucan332000@gmail.com',
    phone: '0345222577',
  },
]);
</script>

<style lang="scss" scoped>
@import '../../styles/views/users/users';
</style>
