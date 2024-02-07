import { createApp } from 'vue';
import { createPinia } from 'pinia';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import './assets/sass/index.sass';

import router from './router';

import App from './App.vue';

import { useAuthStore } from './stores/auth.store.js';

const initApp = async () => {
  const app = createApp(App);

  const pinia = createPinia();
  app.use(pinia);

  await useAuthStore().checkToken();

  app.use(router);
  app.use(ElementPlus);
  app.mount('#app');
};
initApp();
