const admin = [
  {
    path: '/',
    name: 'users',
    component: () => import('../Layouts/UserShow.vue'),
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../Layouts/ProductShow.vue'),
  },
];

export default admin;
