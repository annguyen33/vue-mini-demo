import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import admin from './admin';
const routes: Array<RouteRecordRaw> = [...admin];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
