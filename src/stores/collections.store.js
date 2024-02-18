import { defineStore } from 'pinia';

import Api from '@/utils/network/Api';

export const useCollectionsStore = defineStore('collections', {
  state: () => ({
    loading: {
      data: false,
      modal: false,
    },
    id: null,
    data: [],
    view: false,
    deleteView: false,
    form: {
      name: null,
    },
    mode: 'create',
  }),
  actions: {
    async getList() {
      try {
        this.loading.data = true;
        const {
          data: { data },
        } = await Api.get('/store/collections');
        this.data = data;
      } catch (e) {
        console.error('GET LIST ERROR::', e);
      } finally {
        this.loading.data = false;
      }
    },
    async getDetail(id) {
      try {
        this.loading.modal = true;
        this.id = id;
        this.mode = 'edit';
        this.modalToggle(true);
        const {
          data: { data },
        } = await Api.get(`/store/collections/${id}`);
        this.CHANGE_FIELDS_VALUE_BY_KEY(data);
      } catch (e) {
        console.error('getDetail::', e);
      } finally {
        this.loading.modal = false;
      }
    },

    modalToggle(payload = !this.view) {
      this.view = payload;
    },
    deleteModalToggle(payload = !this.deleteView) {
      this.deleteView = payload;
    },

    closeModal() {
      this.modalToggle(false);
      this.deleteModalToggle(false);
      setTimeout(() => {
        this.form = {
          name: null,
        };
        this.mode = 'create';
        this.id = null;
      }, 300);
    },
    async sendModal() {
      this.mode === 'create' ? await this.submitForm() : await this.updateForm();
      this.closeModal();
      await this.getList();
    },

    getConfirm(id) {
      this.id = id;
      this.deleteModalToggle(true);
    },
    async confirmDelete() {
      await Api.delete(`/store/collections/${this.id}`);
      this.closeModal();
      await this.getList();
    },

    async submitForm() {
      try {
        await Api.post('/store/collections', this.form);
      } catch (e) {
        console.error('submitForm::', e);
      }
    },
    async updateForm() {
      try {
        await Api.patch(`/store/collections/${this.id}`, this.form);
      } catch (e) {
        console.error('updateForm::', e);
      }
    },

    CHANGE_FIELDS_VALUE_BY_KEY(payload) {
      Object.keys(payload).forEach((key) => {
        this.form[key] = payload[key];
      });
    },
    SET_DATA(payload) {
      const { type, value } = payload;
      this[type] = value;
    },
  },
});
