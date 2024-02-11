import { defineStore } from 'pinia';

import Api from '@/utils/network/Api';

export const useUserStore = defineStore('user', {
  state: () => ({
    loading: false,
    profile: {},
    data: [],
    active: false,
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
    async getOrders() {
      try {
        this.loading = true;
        const {
          data: { data },
        } = await Api.get('store/user/profile/orders');
        this.data = data;
      } catch (e) {
        console.error('GET ORDERS::', e);
      } finally {
        this.loading = false;
      }
    },
  },
});
