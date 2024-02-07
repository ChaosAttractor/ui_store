<template>
  <el-tabs :model-value="value" @tab-change="tabHandler">
    <el-tab-pane v-for="tab in tabs" :key="tab.value" :label="tab.name" :name="tab.value" />
  </el-tabs>
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
      this.$emit('update:tab', tab);
    },
  },
};
</script>
