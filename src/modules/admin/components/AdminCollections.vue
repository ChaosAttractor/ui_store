<template>
  <section class="admin-collections">
    <AdminCollectionsDrawer />
    <AdminCollectionsConfirm />
    <div class="d-flex justify-end">
      <KusakabeButton content="Создать коллекцию" size="L" @click="modalToggle(true)" />
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
          <template v-if="head.value === 'createdAt'" #default="{ row }">
            <span>
              {{ getDate(row[head.value]) }}
            </span>
          </template>
          <template v-else-if="head.value === 'actions'" #default="{ row }">
            <div class="d-flex gx-2">
              <el-tooltip content="Редактирование" placement="top" :enterable="false">
                <KusakabeIconWrapper
                  icon-name="EditIcon"
                  class="kusakabe-icon-color admin-collections--edit kusakabe-icon-cursor_pointer"
                  @click="getDetail(row.id)"
                />
              </el-tooltip>
              <el-tooltip content="Удаление" placement="top" :enterable="false">
                <KusakabeIconWrapper
                  icon-name="DeleteIcon"
                  class="kusakabe-icon-color admin-collections--delete kusakabe-icon-cursor_pointer"
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

import { useCollectionsStore } from '@/stores/collections.store';

import KusakabeTable from '@/components/KusakabeTable';
import KusakabeButton from '@/components/KusakabeButton';
import KusakabeIconWrapper from '@/components/KusakabeIconWrapper';

import AdminCollectionsDrawer from './AdminCollectionsDrawer';

import collectionsHeaders from '../entities/collectionsHeaders';

import getDate from '@/utils/getDate';
import AdminCollectionsConfirm from '@/modules/admin/components/AdminCollectionsConfirm.vue';

export default {
  name: 'AdminCollections',
  components: {
    AdminCollectionsConfirm,
    KusakabeIconWrapper,
    AdminCollectionsDrawer,
    KusakabeButton,
    KusakabeTable,
  },
  data: () => ({
    headers: collectionsHeaders,
  }),
  computed: {
    ...mapState(useCollectionsStore, ['data']),
    getDate() {
      return (date, format) => getDate(date, format);
    },
  },
  async mounted() {
    await this.getList();
  },
  methods: {
    ...mapActions(useCollectionsStore, ['getList', 'modalToggle', 'getDetail', 'getConfirm']),
  },
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/colors"

.admin-collections
  &--edit:hover
    stroke: map-get($green, 'light-2') !important
  &--delete:hover
    stroke: map-get($red, 'dark') !important
</style>
