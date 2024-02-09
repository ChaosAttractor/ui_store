<template>
  <div class="kusakabe-input">
    <span :class="labelClasses">
      {{ label }}
    </span>
    <el-input
      :placeholder="placeholder"
      :model-value="value"
      :type="type"
      :show-password="showPassword"
      @input="inputHandler"
    />
  </div>
</template>

<script>
export default {
  name: 'KusakabeInput',
  props: {
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
    showPassword: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['input'],
  computed: {
    labelClasses() {
      const common = 'kusakabe-input';
      const label = this.label ? `${common}__label` : '';
      return `kusakabe-text-t3 ${label}`;
    },
  },
  methods: {
    inputHandler(val) {
      this.$emit('input', val);
    },
  },
};
</script>

<style lang="sass" scoped>
.kusakabe-input
  position: relative
  &__label
    margin-left: 4px
</style>
