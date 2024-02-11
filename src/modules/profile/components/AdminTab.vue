<template>
  <section class="admin-tab">
    <KusakabeTable :headers="headers()" :items="data" expanded>
      <template #expanded-row-template="{ item }">
        {{ item }}
      </template>
    </KusakabeTable>
  </section>
</template>

<script>
import { mapActions, mapState } from 'pinia';

import KusakabeTable from '@/components/KusakabeTable.vue';

import adminHeaders from '../entities/adminHeaders';

import { useAdminStore } from '@/stores/admin.store.js';

export default {
  name: 'AdminTab',
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
