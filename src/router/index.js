import * as Vue from 'vue';
import * as Router from 'vue-router';

import { useCommonStore } from '../stores/common.store';
import { useUserStore } from '../stores/user.store';

const router = Router.createRouter({
  history: Router.createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Store',
      meta: {
        public: true,
      },
      component: () => import('../modules/store/pages/StorePage'),
    },
    {
      path: '/auth',
      name: 'Auth',
      meta: {
        title: 'Авторизация',
        public: true,
      },
      component: () => import('../modules/auth/pages/AuthPage'),
    },
    {
      path: '/admin',
      name: 'Admin',
      meta: {
        title: 'Админ панель',
      },
      component: () => import('../modules/admin/main/pages/AdminPage.vue'),
    },
    {
      path: '/profile',
      name: 'Profile',
      meta: {
        title: 'Профиль',
      },
      component: () => import('../modules/profile/pages/ProfilePage'),
    },
  ],
});

/** Установка title* */
router.afterEach((to) => {
  const projectName = 'Kusakabe';
  const title = to.meta?.title ? `${to.meta?.title} · ${projectName}` : projectName;
  Vue.nextTick(() => {
    document.title = title;
  });
});

// получает все доступные пути приложения
const checkPath = () =>
  router
    .getRoutes()
    .map(({ name }) => name)
    .filter((el) => !!el);

router.beforeEach(async (to, from, next) => {
  const availablePath = checkPath();

  const commonStore = useCommonStore();
  const userStore = useUserStore();

  // получаем layout страницы
  const layout = to.meta?.layout ? to.meta?.layout : 'MainLayout';

  // проверяем, что роут действительно существует
  const notFound = !availablePath.includes(to.name);

  // получаем защищенные url
  const secureRoutes = router
    .getRoutes()
    .filter((el) => !el.meta?.public)
    .map(({ name }) => name);

  // если пользователь неактивен и идет на защищенный урл
  const isNotActive = !userStore.active && secureRoutes.includes(to.name);

  // если страница не найдена, отправляем на /
  if (notFound) {
    commonStore.UPDATE_LAYOUT('MainLayout');
    next({ path: '/' });
    return;
  }

  // если пользователь не активен, отправляем на вход
  if (isNotActive) {
    next({ path: '/' });
    return;
  }

  commonStore.UPDATE_LAYOUT(layout);

  next();
});

/**
 * Ловлю ошибки дубликата роутера
 * */
const originalPush = router.push;
router.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalPush.call(this, location, onResolve, onReject);
  }

  return originalPush.call(this, location).catch((err) => {
    if (Router.isNavigationFailure(err)) {
      return err;
    }

    return Promise.reject(err);
  });
};

export default router;
