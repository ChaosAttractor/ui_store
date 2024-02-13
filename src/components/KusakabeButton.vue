<template>
  <el-button :size="btnSize[size]" @click="clickHandler">
    <slot>
      {{ content }}
    </slot>
  </el-button>
</template>

<script>
export default {
  name: 'KusakabeButton',
  props: {
    content: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'M',
    },
  },
  emits: ['click'],
  data: () => ({
    btnSize: {
      L: 'large',
      M: 'default',
      S: 'small',
    },
  }),
  methods: {
    clickHandler() {
      this.$emit('click');
    },
  },
};
</script>
