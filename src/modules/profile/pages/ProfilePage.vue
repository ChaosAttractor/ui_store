<template>
  <section>
    <KusakabeTabs :value="activeTab" :tabs="tabList()" @update:tab="tabHandler" />
    <template v-if="activeTab === 'profile'">
      <ProfileTab />
    </template>
    <template v-if="activeTab === 'orders'">
      <OrdersTab />
    </template>
    <template v-if="activeTab === 'admin'">
      <AdminTab />
    </template>
  </section>
</template>

<script>
import tabList from '../entities/tabList.js';

import KusakabeTabs from '@/components/KusakabeTabs.vue';

import ProfileTab from '../components/ProfileTab.vue';
import OrdersTab from '../components/OrdersTab.vue';
import AdminTab from '../components/AdminTab.vue';

export default {
  name: 'ProfilePage',
  components: { AdminTab, OrdersTab, ProfileTab, KusakabeTabs },
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
