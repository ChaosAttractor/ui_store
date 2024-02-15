<template>
  <section class="kusakabe-tabs">
    <el-tabs :model-value="value" @tab-change="tabHandler">
      <el-tab-pane v-for="tab in tabs" :key="tab.value" :label="tab.name" :name="tab.value" />
    </el-tabs>
    <slot :name="value" />
  </section>
</template>

<script>
export default {
  name: 'KusakabeTabs',
  props: {
    value: {
      type: String,
      default: '',
    },
    tabs: {
      type: Array,
      default: () => [],
    },
  },
  emits: ['update:tab'],
  methods: {
    tabHandler(tab) {
      this.$router.push({ query: { tab } });
      this.$emit('update:tab', tab);
    },
  },
};
</script>
