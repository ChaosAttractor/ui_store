<template>
  <el-container class="flex-col">
    <KusakabeHeader />
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
import KusakabeHeader from '../components/KusakabeHeader.vue';

export default {
  name: 'MainLayout',
  components: { KusakabeHeader },
};
</script>
