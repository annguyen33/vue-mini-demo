<template>
  <div class="list">
    <div class="list-header">
      <div class="list-header-title">List User</div>
      <div v-if="loading">Loading....</div>
      <div class="list-header-action">
        <button class="custom-btn" style="margin-right: 10px">
          <router-link :to="{ name: 'users-add' }"> Add new (vuelidate) </router-link>
        </button>
        <button class="custom-btn">
          <router-link :to="{ name: 'users-add-vee' }"> Add new (vee-validate) </router-link>
        </button>
      </div>
    </div>
    <div class="list-user">
      <table>
        <thead>
          <tr>
            <th align="left">#</th>
            <th align="left">Name</th>
            <th align="left">Date of Birth</th>
            <th align="left">Email</th>
            <th align="left">Phone</th>
            <th align="left">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="user.id">
            <td>{{ index + 1 }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.dateOfBirth }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.phone }}</td>
            <td>
              <button class="bnt-edit"><router-link :to="`/users/${user.id}`">Edit</router-link></button>
              <button class="bnt-del" @click="usersModule.deleteUser(user.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usersModule, loaderModule } from '@/store';

const { users } = usersModule;
usersModule.loadUsers();
const loading = loaderModule.loadingStatus;
</script>

<style lang="scss" scoped>
@import '../../styles/views/users/users';
</style>
