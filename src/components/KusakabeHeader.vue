<template>
  <el-header class="kusakabe-header d-flex justify-space-between align-baseline">
    <router-link class="kusakabe-header__title" to="/"> KUSAKABE </router-link>
    <section>
      <a v-if="profile" href="/profile">
        {{ profile.fullName }}
      </a>
      <a v-else href="/auth"> Авторизация </a>
    </section>
  </el-header>
</template>

<script>
import { mapState } from 'pinia';
import { useUserStore } from '@/stores/user.store.js';

export default {
  name: 'KusakabeHeader',
  computed: {
    ...mapState(useUserStore, ['profile']),
  },
};
</script>

<style lang="sass">
@import "@/assets/sass/colors"

.kusakabe-header
  &__title
    font-size: 60px
    text-decoration: none
    color: map-get($plain, 'black')
</style>
