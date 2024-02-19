<template>
  <KusakabeDialog :view="deleteView" title="Подтверждение действия" @close="closeModal">
    <span> Вы действительно хотите удалить запись №{{ id }}? </span>
    <template #footer>
      <KusakabeButton content="Подтверждаю" size="L" @click="confirmDelete" />
      <KusakabeButton content="Отмена" size="L" @click="closeModal" />
    </template>
  </KusakabeDialog>
</template>

<script>
import { mapActions, mapState } from 'pinia';

import KusakabeButton from '@/components/KusakabeButton';
import KusakabeDialog from '@/components/KusakabeDialog';

import { useDeliveryStore } from '@/stores/delivery.store';

export default {
  name: 'AdminDeliveryConfirm',
  components: { KusakabeButton, KusakabeDialog },
  computed: {
    ...mapState(useDeliveryStore, ['id', 'deleteView']),
  },
  methods: {
    ...mapActions(useDeliveryStore, ['closeModal', 'confirmDelete']),
  },
};
</script>
