<template>
  <el-button
    :type="btnType"
    :disabled="disabled"
    :loading="loading"
    :size="btnSize[size]"
    @click="clickHandler"
  >
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
    primary: {
      type: Boolean,
      default: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
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
  computed: {
    btnType() {
      return this.primary ? 'primary' : '';
    },
  },
  methods: {
    clickHandler() {
      this.$emit('click');
    },
  },
};
</script>
