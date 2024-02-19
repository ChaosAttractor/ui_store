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

import { useCollectionsStore } from '@/stores/collections.store';

export default {
  name: 'AdminCollectionsConfirm',
  components: { KusakabeButton, KusakabeDialog },
  computed: {
    ...mapState(useCollectionsStore, ['id', 'deleteView']),
  },
  methods: {
    ...mapActions(useCollectionsStore, ['closeModal', 'confirmDelete']),
  },
};
</script>
