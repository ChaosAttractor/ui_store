<template>
  <section class="admin">
    <KusakabeTabs :value="activeTab" :tabs="tabList()" @update:tab="tabHandler">
      <template #orders>
        <AdminOrders />
      </template>
      <template #delivery>
        <AdminDelivery />
      </template>
      <template #collections>
        <AdminCollections />
      </template>
    </KusakabeTabs>
  </section>
</template>

<script>
import AdminOrders from '../components/AdminOrders';
import AdminDelivery from '../components/AdminDelivery';
import AdminCollections from '../components/AdminCollections';
import KusakabeTabs from '@/components/KusakabeTabs';

import tabList from '../entities/tabList';

export default {
  name: 'AdminTab',
  components: { AdminCollections, KusakabeTabs, AdminDelivery, AdminOrders },
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
