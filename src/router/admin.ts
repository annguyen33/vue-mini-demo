const admin = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/users',
    name: 'users',
    component: () => import('../views/users/UsersView.vue'),
    children: [
      {
        name: 'users-add',
        path: '/users/add',
        component: () => import('../views/users/FormUser.vue'),
      },
      {
        path: '/users/:id',
        component: () => import('../views/users/FormUser.vue'),
      },
    ],
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../Layouts/ProductShow.vue'),
  },
];

export default admin;
