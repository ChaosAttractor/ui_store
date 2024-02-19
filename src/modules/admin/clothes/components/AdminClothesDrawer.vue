<template>
  <KusakabeDrawer :view="view" :title="title" @close="modalToggle(false)">
    <template #body>
      <KusakabeInput
        size="L"
        label="Название"
        placeholder="Название"
        :value="form.name"
        @input="(name) => CHANGE_FIELDS_VALUE_BY_KEY({ name })"
      />
      <KusakabeInput
        size="L"
        label="Описание товара"
        placeholder="Описание товара"
        type="textarea"
        autosize
        :value="form.description"
        @input="(description) => CHANGE_FIELDS_VALUE_BY_KEY({ description })"
      />
      <KusakabeInput
        size="L"
        label="Цена товара"
        placeholder="Цена товара"
        type="number"
        :value="form.price"
        @input="(price) => CHANGE_FIELDS_VALUE_BY_KEY({ price })"
      />
      <KusakabeFileUploader />
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

import { useClothesStore } from '@/stores/clothes.store';
import KusakabeFileUploader from '@/components/KusakabeFileUploader';

export default {
  name: 'AdminClothesDrawer',
  components: { KusakabeFileUploader, KusakabeInput, KusakabeButton, KusakabeDrawer },
  computed: {
    ...mapState(useClothesStore, ['view', 'form', 'mode', 'id']),
    title() {
      return this.mode === 'create' ? 'Создание товара' : `Редактирование товара`;
    },
    btnContent() {
      return this.mode === 'create' ? 'Добавить' : 'Редактировать';
    },
  },
  methods: {
    ...mapActions(useClothesStore, ['modalToggle', 'sendModal', 'CHANGE_FIELDS_VALUE_BY_KEY']),
  },
};
</script>
