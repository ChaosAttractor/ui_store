import { defineStore } from 'pinia';

import Api from '../utils/network/Api.js';

import { useUserStore } from './user.store.js';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    loading: false,
    form: {
      username: null,
      password: null,
    },
  }),
  actions: {
    /**
     * Вход в системы
     *
     * @returns {Promise<void>}
     */
    async login(router) {
      try {
        this.loading = true;
        const { username, password } = this.form;
        await Api.post('store/auth/login', {
          username,
          password,
        });
        router.push('/');
        await useUserStore().getUserInfo();
      } catch (e) {
        console.error('LOGIN::', e);
      } finally {
        this.loading = false;
      }
    },

    /**
     * Проверка авторизации пользователя
     *
     * @return {Promise<void>}
     */
    async checkToken() {
      try {
        await Api.get('store/auth/status');
        await useUserStore().getUserInfo();
      } catch (e) {
        console.error('CHECK TOKEN ERROR::', e);
      }
    },

    /** Выход из системы */
    async logout() {
      try {
        await Api.post('store/auth/logout');
      } catch (e) {
        console.error('ERROR LOGOUT::', e);
      } finally {
        window.location.reload();
      }
    },

    CHANGE_FIELDS_VALUE_BY_KEY(payload) {
      Object.keys(payload).forEach((key) => {
        this.form[key] = payload[key];
      });
    },
  },
});
