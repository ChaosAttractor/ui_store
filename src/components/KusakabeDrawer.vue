<template>
  <el-drawer :model-value="view" @close="closeHandler">
    <template #header>
      <slot name="header">
        <h3 class="text--black">
          {{ title }}
        </h3>
      </slot>
    </template>
    <template #default>
      <slot name="body" />
    </template>
    <template #footer>
      <slot name="action" />
      <KusakabeButton content="Отмена" :size="size" @click="closeHandler" />
    </template>
  </el-drawer>
</template>

<script>
import KusakabeButton from '@/components/KusakabeButton';

export default {
  name: 'KusakabeDrawer',
  components: { KusakabeButton },
  props: {
    view: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'L',
    },
  },
  emits: ['close'],
  methods: {
    closeHandler() {
      this.$emit('close');
    },
  },
};
</script>
