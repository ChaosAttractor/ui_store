import { defineStore } from 'pinia';
import Api from '@/utils/network/Api';

export const useDeliveryStore = defineStore('delivery', {
  state: () => ({
    loading: {
      data: false,
      modal: false,
    },
    id: null,
    data: [],
    view: false,
    form: {
      name: null,
      price: null,
    },
    mode: 'create',
  }),
  actions: {
    async getList() {
      try {
        this.loading.data = true;
        const {
          data: { data },
        } = await Api.get('/store/delivery');
        this.data = data;
      } catch (e) {
        console.error('getList::', e);
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
        } = await Api.get(`/store/delivery/${id}`);
        this.CHANGE_FIELDS_VALUE_BY_KEY(data);
      } catch (e) {
        console.error('getDetail::', e);
      } finally {
        this.loading.modal = false;
      }
    },
    closeModal() {
      this.modalToggle(false);
      this.form = {
        name: null,
        price: null,
      };
      this.mode = 'create';
      this.id = null;
    },
    async sendModal() {
      this.mode === 'create' ? await this.submitForm() : await this.updateForm();
      this.closeModal();
      await this.getList();
    },
    async submitForm() {
      try {
        await Api.post('/store/delivery', this.form);
      } catch (e) {
        console.error('submitForm::', e);
      }
    },
    async updateForm() {
      try {
        await Api.patch(`/store/delivery/${this.id}`, this.form);
      } catch (e) {
        console.error('updateForm::', e);
      }
    },
    modalToggle(payload = !this.view) {
      this.view = payload;
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
