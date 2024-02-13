<template>
  <section class="kusakabe-sidebar__body admin-delivery">
    <AdminDeliveryDrawer />
    <div class="d-flex justify-end">
      <KusakabeButton content="Добавить сервис доставки" size="L" @click="modalToggle(true)" />
    </div>
    <KusakabeTable :headers="headers()" :items="data">
      <template #body>
        <el-table-column
          v-for="head in headers()"
          :key="head.value"
          :prop="head.value"
          :label="head.text"
          :width="head.width"
        >
          <template v-if="head.value === 'actions'" #default="{ row }">
            <div>
              <el-tooltip content="Редактирование" placement="top">
                <KusakabeIconWrapper
                  icon-name="EditIcon"
                  class="kusakabe-icon-color kusakabe-icon-cursor_pointer"
                  @click="getDetail(row.id)"
                />
              </el-tooltip>
            </div>
          </template>
        </el-table-column>
      </template>
    </KusakabeTable>
  </section>
</template>

<script>
import { mapActions, mapState } from 'pinia';

import KusakabeButton from '@/components/KusakabeButton';

import { useDeliveryStore } from '@/stores/profile/delivery.store';

import AdminDeliveryDrawer from './AdminDeliveryDrawer';
import KusakabeTable from '@/components/KusakabeTable';

import deliveryHeaders from '../../entities/deliveryHeaders';
import KusakabeIconWrapper from '@/components/KusakabeIconWrapper.vue';

export default {
  name: 'AdminDelivery',
  components: { KusakabeIconWrapper, KusakabeTable, AdminDeliveryDrawer, KusakabeButton },
  data: () => ({
    headers: deliveryHeaders,
  }),
  computed: {
    ...mapState(useDeliveryStore, ['data']),
  },
  async mounted() {
    this.getList();
  },
  methods: {
    ...mapActions(useDeliveryStore, ['modalToggle', 'getList', 'SET_DATA', 'getDetail']),
  },
};
</script>
