<template>
  <section class="admin-delivery">
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
          <template v-if="head.value === 'price'" #default="{ row }">
            <span> {{ row[head.value].toLocaleString() }} &#8381; </span>
          </template>
          <template v-else-if="head.value === 'actions'" #default="{ row }">
            <div class="d-flex gx-2">
              <el-tooltip content="Редактирование" placement="top" :enterable="false">
                <KusakabeIconWrapper
                  icon-name="EditIcon"
                  class="kusakabe-icon-color admin-delivery--edit kusakabe-icon-cursor_pointer"
                  @click="getDetail(row.id)"
                />
              </el-tooltip>
              <el-tooltip content="Удаление" placement="top" :enterable="false">
                <KusakabeIconWrapper
                  icon-name="DeleteIcon"
                  class="kusakabe-icon-color admin-delivery--delete kusakabe-icon-cursor_pointer"
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

import AdminDeliveryDrawer from '../components/AdminDeliveryDrawer';
import AdminDeliveryConfirm from '../components/AdminDeliveryConfirm';

import { useDeliveryStore } from '@/stores/delivery.store';

import headers from '../entities/headers';

export default {
  name: 'AdminDeliveryPage',
  components: {
    AdminDeliveryConfirm,
    KusakabeIconWrapper,
    KusakabeTable,
    AdminDeliveryDrawer,
    KusakabeButton,
  },
  data: () => ({
    headers,
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

<style lang="sass" scoped>
@import "@/assets/sass/colors"

.admin-delivery
  &--edit:hover
    stroke: map-get($green, 'light-2') !important
  &--delete:hover
    stroke: map-get($red, 'dark') !important
</style>
