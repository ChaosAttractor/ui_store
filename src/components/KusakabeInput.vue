<template>
  <div class="kusakabe-input">
    <span :class="labelClasses">
      {{ label }}
    </span>
    <el-input
      :size="btnSize[size]"
      :placeholder="placeholder"
      :model-value="value"
      :type="type"
      :autosize="autosize"
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
      type: [String, Number],
      default: '',
    },
    autosize: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: '',
    },
    showPassword: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'M',
    },
  },
  emits: ['input'],
  data: () => ({
    btnSize: {
      L: 'large',
      M: 'default',
      S: 'small',
    },
  }),
  computed: {
    labelClasses() {
      const label = this.label ? 'kusakabe-input__label' : '';
      const size = this.size ? `${label}-${this.size}` : '';
      return `kusakabe-text-t3 ${label} ${size}`;
    },
  },
  methods: {
    inputHandler(val) {
      this.$emit('input', val);
    },
  },
};
</script>
