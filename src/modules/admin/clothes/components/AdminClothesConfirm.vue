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

import KusakabeDialog from '@/components/KusakabeDialog';
import KusakabeButton from '@/components/KusakabeButton';

import { useClothesStore } from '@/stores/clothes.store';

export default {
  name: 'AdminClothesConfirm',
  components: { KusakabeButton, KusakabeDialog },
  computed: {
    ...mapState(useClothesStore, ['id', 'deleteView']),
  },
  methods: {
    ...mapActions(useClothesStore, ['closeModal', 'confirmDelete']),
  },
};
</script>
