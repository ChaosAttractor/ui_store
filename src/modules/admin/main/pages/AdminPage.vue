<template>
  <section class="admin">
    <KusakabeTabs :value="activeTab" :tabs="tabList()" @update:tab="tabHandler">
      <template #orders>
        <AdminOrdersPage />
      </template>
      <template #delivery>
        <AdminDeliveryPage />
      </template>
      <template #collections>
        <AdminCollectionsPage />
      </template>
    </KusakabeTabs>
  </section>
</template>

<script>
import tabList from '../entities/tabList';

import KusakabeTabs from '@/components/KusakabeTabs';

import AdminCollectionsPage from '../../collections/pages/AdminCollectionsPage';
import AdminDeliveryPage from '../../delivery/pages/AdminDeliveryPage';
import AdminOrdersPage from '../../orders/pages/AdminOrdersPage';

export default {
  name: 'AdminPage',
  components: { AdminOrdersPage, AdminDeliveryPage, AdminCollectionsPage, KusakabeTabs },
  data: () => ({
    tabList,
    activeTab: tabList()[0].value,
  }),
  mounted() {
    const { tab } = this.$route.query;
    if (!tab) {
      this.$router.push({ query: { tab: this.activeTab } });
      return;
    }
    this.activeTab = tab;
  },
  methods: {
    tabHandler(value) {
      this.activeTab = value;
    },
  },
};
</script>
