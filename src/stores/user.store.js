import { defineStore } from 'pinia';
import Api from '@/utils/network/Api.js';

export const useUserStore = defineStore('user', {
  state: () => ({
    loading: false,
    profile: {},
    acitve: false,
  }),
  actions: {
    async getUserInfo() {
      try {
        const { data } = await Api.get('store/user/profile');
        this.profile = data;
        this.active = true;
      } catch (e) {
        console.error('GET USER INFO::', e);
        this.active = false;
      }
    },
  },
});
