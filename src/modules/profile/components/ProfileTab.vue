<template>
  <section class="profile-tab">
    <section class="profile-tab__sections">
      <h3>Профиль</h3>
      <section class="profile-tab__form">
        <KusakabeInput :value="profile.lastName" label="Фамилия" placeholder="Фамилия" />
        <KusakabeInput :value="profile.firstName" label="Имя" placeholder="Имя" />
        <KusakabeInput :value="profile.email" label="Почта" placeholder="Почта" />
      </section>
      <el-divider />
      <h3>Безопасность</h3>
      <KusakabeButton content="Сменить пароль" />
    </section>
  </section>
</template>

<script>
import { mapState } from 'pinia';
import { useUserStore } from '@/stores/user.store';
import KusakabeInput from '@/components/KusakabeInput';
import KusakabeButton from '@/components/KusakabeButton';

export default {
  name: 'ProfileTab',
  components: { KusakabeButton, KusakabeInput },
  computed: {
    ...mapState(useUserStore, ['profile']),
  },
};
</script>

<style lang="sass" scoped>
.profile-tab
  &__form
    display: flex
    flex-direction: column
    row-gap: 10px
</style>
