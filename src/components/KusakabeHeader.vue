<template>
  <el-header class="kusakabe-header">
    <section class="main-wrapper__container kusakabe-header--wrapper">
      <router-link class="kusakabe-header__title" to="/"> KUSAKABE </router-link>
      <div v-if="active" class="d-flex align-center gx-2">
        <router-link to="/admin" class="kusakabe-header__profile kusakabe-text-t2">
          Админ-панель
        </router-link>
        <div class="d-flex align-center">
          <router-link to="/profile" class="kusakabe-header__profile kusakabe-text-t2">
            {{ profile.fullName }}
          </router-link>
          <KusakabeIconWrapper
            icon-name="LogoutIcon"
            class="kusakabe-icon-color kusakabe-icon-cursor_pointer"
            @click="logout()"
          />
        </div>
      </div>

      <router-link v-else to="/auth" class="kusakabe-header__profile kusakabe-text-t2">
        Авторизация
      </router-link>
    </section>
  </el-header>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useUserStore } from '@/stores/user.store';
import KusakabeIconWrapper from '@/components/KusakabeIconWrapper';
import { useAuthStore } from '@/stores/auth.store';

export default {
  name: 'KusakabeHeader',
  components: { KusakabeIconWrapper },
  computed: {
    ...mapState(useUserStore, ['profile', 'active']),
  },
  methods: {
    ...mapActions(useAuthStore, ['logout']),
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
  &__profile
    color: map-get($plain, 'black')
    text-decoration: none
    margin-right: 4px
</style>
