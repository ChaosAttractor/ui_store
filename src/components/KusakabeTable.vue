<template>
  <el-table :data="items">
    <slot name="body">
      <el-table-column v-if="expanded" type="expand">
        <template #default="props">
          <slot name="expanded-row-template" v-bind="{ item: props }" />
        </template>
      </el-table-column>
      <el-table-column
        v-for="head in headers"
        :key="head.value"
        :prop="head.value"
        :label="head.text"
        :width="head.width"
      />
    </slot>
    <template #empty>
      <h2 class="kusakabe-text">Сейчас здесь пусто :(</h2>
    </template>
  </el-table>
</template>

<script>
export default {
  name: 'KusakabeTable',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    headers: {
      type: Array,
      required: true,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    expanded: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
