<template>
  <KusakabeTable :headers="headers()" :items="data" expanded>
    <template #expanded-row-template="{ item }">
      {{ item }}
    </template>
  </KusakabeTable>
</template>

<script>
import { mapActions, mapState } from 'pinia';

import adminHeaders from '../../entities/adminHeaders';

import { useAdminStore } from '@/stores/admin.store';

import KusakabeTable from '@/components/KusakabeTable';

export default {
  name: 'AdminOrders',
  components: { KusakabeTable },
  data: () => ({
    headers: adminHeaders,
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
