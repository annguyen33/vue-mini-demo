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
        path: 'add',
        component: () => import('../views/users/FormUser.vue'),
      },
      {
        name: 'users-add-vee',
        path: 'add-vee',
        component: () => import('../views/users/FormUserVee.vue'),
      },
      {
        name: 'users-edit',
        path: ':userId',
        component: () => import('../views/users/FormUser.vue'),
      },
    ],
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/products/ProductView.vue'),
    children: [
      {
        name: 'products-add',
        path: 'add',
        component: () => import('../views/products/FormProduct.vue'),
      },
      {
        name: 'product',
        path: ':productId',
        component: () => import('../views/products/FormProduct.vue'),
      },
    ],
  },
  {
    path: '/validate-joke',
    name: 'validate',
    component: () => import('../views/jokes/JokeView.vue'),
  },
];

export default admin;
