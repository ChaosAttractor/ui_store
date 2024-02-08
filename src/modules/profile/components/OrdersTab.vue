<template>
  <section class="orders-tab">
    <el-table>
      <template #empty>
        <h2 class="kusakabe-text">У Вас еще нет заказов</h2>
      </template>
    </el-table>
  </section>
</template>

<script>
export default {
  name: 'OrdersTab',
};
</script>
