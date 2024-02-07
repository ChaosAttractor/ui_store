<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import eventBus from './utils/event.bus.js';

import MainLayout from './layout/MainLayout.vue';

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
