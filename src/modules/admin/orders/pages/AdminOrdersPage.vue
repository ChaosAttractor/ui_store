<template>
  <KusakabeTable :headers="headers()" :items="data" expanded class="kusakabe-sidebar__body">
    <template #expanded-row-template="{ item }">
      {{ item }}
    </template>
  </KusakabeTable>
</template>

<script>
import { mapActions, mapState } from 'pinia';

import KusakabeTable from '@/components/KusakabeTable';

import { useAdminStore } from '@/stores/admin.store';

import headers from '../entities/headers';

export default {
  name: 'AdminOrdersPage',
  components: { KusakabeTable },
  data: () => ({
    headers,
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
