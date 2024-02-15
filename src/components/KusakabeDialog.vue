<template>
  <el-dialog
    :model-value="view"
    :title="title"
    :width="width"
    :align-center="center"
    class="kusakabe-dialog"
    @close="closeHandler"
  >
    <template #header>
      <slot name="header">
        <h4 class="kusakabe-text">
          {{ title }}
        </h4>
      </slot>
    </template>
    <section class="kusakabe-text-t2 text--black">
      <slot />
    </section>
    <template #footer>
      <slot name="footer" />
    </template>
  </el-dialog>
</template>

<script>
export default {
  name: 'KusakabeDialog',
  props: {
    view: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    width: {
      type: String,
      default: '500',
    },
    center: {
      type: Boolean,
      default: false,
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
