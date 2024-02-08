<template>
  <el-header class="kusakabe-header">
    <section class="main-wrapper__container kusakabe-header--wrapper">
      <router-link class="kusakabe-header__title" to="/"> KUSAKABE </router-link>
      <a v-if="active" href="/profile">
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
    ...mapState(useUserStore, ['profile', 'active']),
  },
};
</script>

<style lang="sass">
@import "@/assets/sass/colors"

.kusakabe-header
  height: 48px
  background: #FFFFFF
  padding: 0
  &--wrapper
    display: flex
    justify-content: space-between
    align-items: baseline
  &__title
    line-height: 120% !important
    font-family: 'FuturaPT Light', sans-serif
    font-size: 36px
    text-decoration: none
    color: map-get($plain, 'black')
</style>
