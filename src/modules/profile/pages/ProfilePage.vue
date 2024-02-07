<template>
  <section>
    <KusakabeTabs :value="activeTab" :tabs="tabList()" @update:tab="tabHandler" />
  </section>
</template>

<script>
import tabList from '../entities/tabList.js';
import KusakabeTabs from '@/components/KusakabeTabs.vue';

export default {
  name: 'ProfilePage',
  components: { KusakabeTabs },
  data: () => ({
    tabList,
    activeTab: tabList()[0].value,
  }),
  methods: {
    tabHandler(value) {
      this.activeTab = value;
    },
  },
};
</script>
