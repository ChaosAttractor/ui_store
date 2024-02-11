import { createApp } from 'vue';
import { createPinia } from 'pinia';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import './assets/sass/index.sass';

import icons from './components/icons';

import router from './router';

import App from './App';

import { useAuthStore } from './stores/auth.store';

const initApp = async () => {
  const app = createApp(App);

  const pinia = createPinia();
  app.use(pinia);

  await useAuthStore().checkToken();

  app.use(icons);
  app.use(router);
  app.use(ElementPlus);
  app.mount('#app');
};
initApp();
