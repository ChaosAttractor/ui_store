<template>
  <section class="admin-tab">
    <KusakabeSidebar :value="tab" :menu="sidebar()" @change="CHANGE_TAB">
      <template #orders>
        <AdminOrders />
      </template>
      <template #delivery>
        <AdminDelivery />
      </template>
    </KusakabeSidebar>
  </section>
</template>

<script>
import { mapActions, mapState } from 'pinia';

import AdminOrders from './admin/AdminOrders';
import AdminDelivery from './admin/AdminDelivery';
import KusakabeSidebar from '@/components/KusakabeSidebar';

import sidebar from '../entities/sidebar';

import { useAdminStore } from '@/stores/profile/admin.store.js';

export default {
  name: 'AdminTab',
  components: { AdminDelivery, KusakabeSidebar, AdminOrders },
  data: () => ({
    sidebar,
  }),
  computed: {
    ...mapState(useAdminStore, ['tab']),
  },
  mounted() {
    this.CHANGE_TAB(sidebar()[0].value);
  },
  methods: {
    ...mapActions(useAdminStore, ['CHANGE_TAB']),
  },
};
</script>

<style lang="sass" scoped>
.admin-tab
  display: flex
</style>
