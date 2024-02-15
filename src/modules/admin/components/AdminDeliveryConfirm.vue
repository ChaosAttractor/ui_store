<template>
  <KusakabeDialog :view="deleteView" title="Подтверждение действия" @close="closeModal">
    <span> Вы действительно хотите удалить запись №1? </span>
    <template #footer>
      <KusakabeButton content="Подтверждаю" size="L" @click="confirmDelete" />
      <KusakabeButton content="Отмена" size="L" @click="closeModal" />
    </template>
  </KusakabeDialog>
</template>

<script>
import KusakabeDialog from '@/components/KusakabeDialog';
import { useDeliveryStore } from '@/stores/delivery.store';
import { mapState } from 'pinia';
import KusakabeButton from '@/components/KusakabeButton.vue';

export default {
  name: 'AdminDeliveryConfirm',
  components: { KusakabeButton, KusakabeDialog },
  computed: {
    ...mapState(useDeliveryStore, ['deleteView', 'closeModal', 'confirmDelete']),
  },
};
</script>
