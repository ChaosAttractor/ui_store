import { defineStore } from 'pinia';

export const useCommonStore = defineStore('common', {
  state: () => ({
    layout: 'MainLayout',
  }),
  actions: {
    UPDATE_LAYOUT(payload) {
      this.layout = payload;
    },
  },
});
