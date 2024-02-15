<template>
  <section class="kusakabe-sidebar__body admin-delivery">
    <AdminDeliveryDrawer />
    <AdminDeliveryConfirm />
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
            <div class="d-flex gx-2">
              <el-tooltip content="Редактирование" placement="top" :enterable="false">
                <KusakabeIconWrapper
                  icon-name="EditIcon"
                  class="kusakabe-icon-color kusakabe-icon-cursor_pointer"
                  @click="getDetail(row.id)"
                />
              </el-tooltip>
              <el-tooltip content="Редактирование" placement="top" :enterable="false">
                <KusakabeIconWrapper
                  icon-name="DeleteIcon"
                  class="kusakabe-icon-color kusakabe-icon-cursor_pointer"
                  @click="getConfirm(row.id)"
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
import KusakabeIconWrapper from '@/components/KusakabeIconWrapper';
import KusakabeTable from '@/components/KusakabeTable';
import AdminDeliveryDrawer from './AdminDeliveryDrawer';

import { useDeliveryStore } from '@/stores/delivery.store.js';

import deliveryHeaders from '../entities/deliveryHeaders';
import AdminDeliveryConfirm from '@/modules/admin/components/AdminDeliveryConfirm.vue';

export default {
  name: 'AdminDelivery',
  components: {
    AdminDeliveryConfirm,
    KusakabeIconWrapper,
    KusakabeTable,
    AdminDeliveryDrawer,
    KusakabeButton,
  },
  data: () => ({
    headers: deliveryHeaders,
    visible: {
      edit: false,
      delete: false,
    },
  }),
  computed: {
    ...mapState(useDeliveryStore, ['data']),
  },
  async mounted() {
    this.getList();
  },
  methods: {
    ...mapActions(useDeliveryStore, [
      'modalToggle',
      'getList',
      'SET_DATA',
      'getDetail',
      'getConfirm',
    ]),
  },
};
</script>
