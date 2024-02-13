<template>
  <section class="kusakabe-sidebar">
    <el-menu
      :default-active="menu[0].value"
      collapse
      class="kusakabe-sidebar__menu"
      @select="selectHandler"
    >
      <el-menu-item v-for="item in menu" :key="item.value" :index="item.value">
        <KusakabeIconWrapper
          :icon-name="item.icon"
          :class="iconClass(item)"
          width="24"
          height="24"
          view-box="0 0 24 24"
        />
        <template #title> {{ item.title }} </template>
      </el-menu-item>
    </el-menu>
    <slot :name="value" />
  </section>
</template>

<script>
import KusakabeIconWrapper from '@/components/KusakabeIconWrapper';

export default {
  name: 'KusakabeSidebar',
  components: { KusakabeIconWrapper },
  props: {
    value: {
      type: String,
      default: '',
    },
    menu: {
      type: Array,
      default: () => [],
    },
  },
  emits: ['change'],
  computed: {
    iconClass() {
      return (item) => (!item.iconClass ? 'kusakabe-icon-color' : item.iconClass);
    },
  },
  methods: {
    selectHandler(val) {
      this.$emit('change', val);
    },
  },
};
</script>
