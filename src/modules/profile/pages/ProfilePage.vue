<template>
  <section>
    <KusakabeTabs :value="activeTab" :tabs="tabList()" @update:tab="tabHandler">
      <template #profile>
        <ProfileTab />
      </template>
      <template #orders>
        <OrdersTab />
      </template>
    </KusakabeTabs>
  </section>
</template>

<script>
import tabList from '../entities/tabList';

import KusakabeTabs from '@/components/KusakabeTabs';

import ProfileTab from '../components/ProfileTab';
import OrdersTab from '../components/OrdersTab';

export default {
  name: 'ProfilePage',
  components: { OrdersTab, ProfileTab, KusakabeTabs },
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
