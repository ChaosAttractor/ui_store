<template>
  <section class="orders-tab">
    <KusakabeTable :headers="headers()" :items="data" expanded>
      <template #expanded-row-template="{ item }">
        {{ item }}
      </template>
    </KusakabeTable>
  </section>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useUserStore } from '@/stores/user.store';

import KusakabeTable from '@/components/KusakabeTable';

import headers from '../entities/headers';

export default {
  name: 'OrdersTab',
  components: { KusakabeTable },
  data: () => ({
    headers,
  }),
  computed: {
    ...mapState(useUserStore, ['data']),
  },
  async mounted() {
    await this.getOrders();
  },
  methods: {
    ...mapActions(useUserStore, ['getOrders']),
  },
};
</script>
