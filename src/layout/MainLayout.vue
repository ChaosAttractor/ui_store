<template>
  <el-container class="flex-col main-wrapper">
    <KusakabeHeader />
    <el-main class="main-wrapper__container main-wrapper--body">
      <router-view />
    </el-main>
    <KusakabeFooter />
  </el-container>
</template>

<script>
import KusakabeHeader from '../components/KusakabeHeader.vue';
import KusakabeFooter from '../components/KusakabeFooter.vue';

export default {
  name: 'MainLayout',
  components: { KusakabeFooter, KusakabeHeader },
};
</script>
