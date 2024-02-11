<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import eventBus from './utils/event.bus';

import MainLayout from './layout/MainLayout';

export default {
  name: 'App',
  components: { MainLayout },
  data: () => ({
    layout: 'MainLayout',
  }),
  mounted() {
    eventBus.on('logout', () => this.logout());
  },
  beforeUnmount() {
    eventBus.remove('logout');
  },
  methods: {
    logout() {
      return '';
    },
  },
};
</script>
