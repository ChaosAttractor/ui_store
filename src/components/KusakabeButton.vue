<template>
  <el-button @click="clickHandler">
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
  },
  emits: ['click'],
  methods: {
    clickHandler() {
      this.$emit('click');
    },
  },
};
</script>
