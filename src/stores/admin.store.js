import { defineStore } from 'pinia';
import Api from '@/utils/network/Api.js';

export const useAdminStore = defineStore('admin', {
  state: () => ({
    loading: false,
    data: [],
  }),
  actions: {
    async getList() {
      try {
        this.loading = true;
        const {
          data: { data },
        } = await Api.get('store/orders');
        this.data = data;
      } catch (e) {
        console.error('GET ORDERS::', e);
      } finally {
        this.loading = false;
      }
    },
  },
});
