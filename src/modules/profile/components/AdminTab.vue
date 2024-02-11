<template>
  <section class="admin-tab">
    <AdminOrders />
  </section>
</template>

<script>
import AdminOrders from './admin/AdminOrders';

export default {
  name: 'AdminTab',
  components: { AdminOrders },
};
</script>
