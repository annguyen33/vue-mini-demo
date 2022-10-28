<template>
  <TheHeader />
  <div class="joke">
    <div class="joke-section">
      <p>Random joke:</p>
      <div v-if="jokes.length > 0">
        <div class="joke-content" v-for="(joke, index) in jokes" :key="joke.id">
          {{ index }}. {{ joke.joke }} (id: {{ joke.id }})
        </div>
      </div>
      <div class="btn-group">
        <button class="custom-btn" @click="getJokes(5)">Get jokes</button>
      </div>
    </div>
    <div class="joke-section">
      <p>Demo asyn validate with vuelidate (validate joke id):</p>
      <input type="text" v-model="v.jokeId.$model" />
      <div v-if="v.jokeId.$pending">pending...</div>
      <div v-else>
        <div v-if="v.jokeId.$errors.length > 0">{{ v.jokeId.$errors[0].$message }}</div>
        <div v-if="v.jokeId.$errors.length > 0 && v.jokeId.$silentErrors.length > 0">
          {{ jokeId }} is an valid joke id
        </div>
        <div v-if="v.jokeId.$silentErrors.length == 0">{{ jokeId }} is not an valid joke id</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheHeader from '../../components/TheHeader.vue';
import jokesApi from '@/api/jokesApi';
import type { JokeEntity } from '@/store/models';
import useVuelidate from '@vuelidate/core';
import { helpers, required } from '@vuelidate/validators';
import { ref, watch } from 'vue';

const jokes = ref<JokeEntity[]>([]);
const jokeId = ref('');

const { withMessage, withAsync } = helpers;
const rules = {
  jokeId: {
    required: withMessage('Joke Id is required', required),
    isUnique: withAsync(async (value: string) => {
      if (value === '') return true;
      const res = await jokesApi.getJokeByID(value);
      if (res.data.status === 200) return false;
      return true;
    }),
  },
};

const v = useVuelidate(rules, { jokeId });
watch(jokeId, () => {
  console.log(v.value.jokeId.$silentErrors);
});

async function getJokes(n: number) {
  for (let i = 0; i < n; i++) {
    const joke = await jokesApi.getJoke();
    jokes.value.push(joke.data);
  }
}
</script>

<style lang="scss" scoped>
.joke {
  padding: 30px 100px;
  width: 80%;

  &-section {
    &:not(:first-child) {
      border-top: 1px solid #333;
    }
    margin-bottom: 20px;
  }

  &-content {
    margin-top: 10px;
    font-size: 20px;
  }

  p {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  button {
    width: 100px;
    height: 35px;
    color: #fff;
    border-radius: 5px;
    padding: 10px 8px;
    font-size: 15px;
    font-weight: 700;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
      4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    outline: none;
    margin-top: 10px;
  }

  .custom-btn {
    background: rgba(2, 126, 251, 1);
    border: none;

    a {
      color: #fff;
    }
  }

  input {
    height: 25px;
    width: 200px;
    border-radius: 5px;
    padding: 5px 10px;
  }
}
</style>
