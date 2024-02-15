<template>
  <KusakabeTable :headers="headers()" :items="data" expanded class="kusakabe-sidebar__body">
    <template #expanded-row-template="{ item }">
      {{ item }}
    </template>
  </KusakabeTable>
</template>

<script>
import { mapActions, mapState } from 'pinia';

import ordersHeaders from '../entities/ordersHeaders';

import { useAdminStore } from '@/stores/admin.store.js';

import KusakabeTable from '@/components/KusakabeTable';

export default {
  name: 'AdminOrders',
  components: { KusakabeTable },
  data: () => ({
    headers: ordersHeaders,
  }),
  computed: {
    ...mapState(useAdminStore, ['data']),
  },
  async mounted() {
    await this.getList();
  },
  methods: {
    ...mapActions(useAdminStore, ['getList']),
  },
};
</script>
