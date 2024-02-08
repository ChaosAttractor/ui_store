<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="kusakabe-icon-wrapper"
    :width="width"
    :height="height"
    :viewBox="viewBox"
    :aria-labelledby="iconName"
    :stroke="iconColor"
    :stroke-width="strokeWidth"
    :style="{ fill: fill }"
    @click="clickHandler"
  >
    <g>
      <component
        :is="iconComponent"
        :color="color"
        :height="height"
        :width="width"
        :icon-size="height"
        :icon-sub-type="iconSubType"
      />
    </g>
  </svg>
</template>
<script>
export default {
  name: 'KusakabeIconWrapper',
  props: {
    iconName: {
      type: String,
      required: true,
    },
    viewBox: {
      type: String,
      default: '0 0 24 24',
    },
    width: {
      type: String,
      default: '24',
    },
    height: {
      type: String,
      default: '24',
    },
    fill: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
    strokeWidth: {
      type: String,
      default: '1.5',
    },
    isDoubleStyle: {
      type: Boolean,
      default: false,
    },
    iconSubType: {
      type: String,
      default: 'default',
    },
  },
  emits: ['click'],
  computed: {
    iconComponent() {
      return `${this.iconName.replace('.vue', '')}`;
    },
    iconColor() {
      return this.isDoubleStyle ? 'none' : this.color;
    },
  },
  methods: {
    clickHandler(e) {
      this.$emit('click', e);
    },
  },
};
</script>

<style lang="sass" scoped>
.kusakabe-icon-wrapper
  fill: transparent
</style>
