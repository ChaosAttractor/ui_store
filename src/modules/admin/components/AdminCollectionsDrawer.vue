<template>
  <KusakabeDrawer :view="view" :title="title" @close="modalToggle(false)">
    <template #body>
      <KusakabeInput
        size="L"
        label="Название коллекции"
        placeholder="Название"
        :value="form.name"
        @input="(name) => CHANGE_FIELDS_VALUE_BY_KEY({ name })"
      />
    </template>
    <template #action>
      <KusakabeButton :content="btnContent" size="L" @click="sendModal" />
    </template>
  </KusakabeDrawer>
</template>

<script>
import { mapActions, mapState } from 'pinia';

import KusakabeDrawer from '@/components/KusakabeDrawer';
import KusakabeButton from '@/components/KusakabeButton';
import KusakabeInput from '@/components/KusakabeInput';

import { useCollectionsStore } from '@/stores/collections.store';

export default {
  name: 'AdminCollectionsDrawer',
  components: { KusakabeInput, KusakabeButton, KusakabeDrawer },
  computed: {
    ...mapState(useCollectionsStore, ['view', 'form', 'mode', 'id']),
    title() {
      return this.mode === 'create' ? 'Создание коллекции' : `Редактирование коллекции`;
    },
    btnContent() {
      return this.mode === 'create' ? 'Добавить' : 'Редактировать';
    },
  },
  methods: {
    ...mapActions(useCollectionsStore, ['modalToggle', 'sendModal', 'CHANGE_FIELDS_VALUE_BY_KEY']),
  },
};
</script>
