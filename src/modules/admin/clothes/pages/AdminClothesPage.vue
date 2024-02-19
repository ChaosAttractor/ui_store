<template>
  <section class="admin-clothes">
    <AdminClothesDrawer />
    <AdminClothesConfirm />
    <div class="d-flex justify-end">
      <KusakabeButton content="Создать товар" size="L" @click="modalToggle(true)" />
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
                  class="kusakabe-icon-color admin-clothes--edit kusakabe-icon-cursor_pointer"
                  @click="getDetail(row.id)"
                />
              </el-tooltip>
              <el-tooltip content="Удаление" placement="top" :enterable="false">
                <KusakabeIconWrapper
                  icon-name="DeleteIcon"
                  class="kusakabe-icon-color admin-clothes--delete kusakabe-icon-cursor_pointer"
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

import KusakabeTable from '@/components/KusakabeTable';
import KusakabeButton from '@/components/KusakabeButton';
import KusakabeIconWrapper from '@/components/KusakabeIconWrapper';

import AdminClothesConfirm from '../components/AdminClothesConfirm';
import AdminClothesDrawer from '../components/AdminClothesDrawer';

import headers from '../entities/headers';

import getDate from '@/utils/getDate';

import { useClothesStore } from '@/stores/clothes.store';

export default {
  name: 'AdminClothesPage',
  components: {
    AdminClothesDrawer,
    AdminClothesConfirm,
    KusakabeIconWrapper,
    KusakabeButton,
    KusakabeTable,
  },
  data: () => ({
    headers,
  }),
  computed: {
    ...mapState(useClothesStore, ['data']),
    getDate() {
      return (date, format) => getDate(date, format);
    },
  },
  async mounted() {
    await this.getList();
  },
  methods: {
    ...mapActions(useClothesStore, ['getList', 'modalToggle', 'getDetail', 'getConfirm']),
  },
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/colors"

.admin-clothes
  &--edit:hover
    stroke: map-get($green, 'light-2') !important
  &--delete:hover
    stroke: map-get($red, 'dark') !important
</style>
