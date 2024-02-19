<template>
  <KusakabeDrawer :view="view" :title="title" @close="modalToggle(false)">
    <template #body>
      <KusakabeInput
        size="L"
        label="Название сервиса"
        placeholder="Почта, СДЕК и т.д."
        :value="form.name"
        @input="(name) => CHANGE_FIELDS_VALUE_BY_KEY({ name })"
      />
      <KusakabeInput
        size="L"
        label="Стоимость использования сервиса"
        placeholder="400"
        type="number"
        :value="form.price"
        @input="(price) => CHANGE_FIELDS_VALUE_BY_KEY({ price })"
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

import { useDeliveryStore } from '@/stores/delivery.store';

export default {
  name: 'AdminDeliveryDrawer',
  components: { KusakabeInput, KusakabeButton, KusakabeDrawer },
  computed: {
    ...mapState(useDeliveryStore, ['view', 'form', 'mode', 'id']),
    title() {
      return this.mode === 'create'
        ? 'Добавление сервиса доставки'
        : `Редактирование сервиса доставки №${this.id}`;
    },
    btnContent() {
      return this.mode === 'create' ? 'Добавить' : 'Редактировать';
    },
  },
  methods: {
    ...mapActions(useDeliveryStore, ['modalToggle', 'sendModal', 'CHANGE_FIELDS_VALUE_BY_KEY']),
  },
};
</script>
