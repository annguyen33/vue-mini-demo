import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import admin from './admin';
const routes: Array<RouteRecordRaw> = [...admin];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
