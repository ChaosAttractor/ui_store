import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Store',
      component: () => import('../modules/store/pages/StorePage.vue'),
    },
    {
      path: '/auth',
      name: 'Auth',
      component: () => import('../modules/auth/pages/AuthPage.vue'),
    },
    {
      path: '/admin',
      name: 'Admin',
      component: () => import('../modules/admin/pages/AdminPage.vue'),
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('../modules/profile/pages/ProfilePage.vue'),
    },
  ],
});
export default router;
