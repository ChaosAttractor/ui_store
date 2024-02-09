<template>
  <section>
    <KusakabeInput
      :value="form.username"
      placeholder="Логин"
      @input="CHANGE_FIELDS_VALUE_BY_KEY({ username: $event.trim() })"
      @keyup.enter="login($router)"
    />
    <KusakabeInput
      :value="form.password"
      placeholder="Пароль"
      type="password"
      show-password
      @input="(password) => CHANGE_FIELDS_VALUE_BY_KEY({ password })"
      @keyup.enter="login($router)"
    />
    <KusakabeButton content="Войти" @click="login($router)" />
  </section>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useAuthStore } from '@/stores/auth.store.js';
import KusakabeButton from '@/components/KusakabeButton.vue';
import KusakabeInput from '@/components/KusakabeInput.vue';

export default {
  name: 'AuthPage',
  components: { KusakabeInput, KusakabeButton },
  computed: {
    ...mapState(useAuthStore, ['form']),
  },
  methods: {
    ...mapActions(useAuthStore, ['login', 'CHANGE_FIELDS_VALUE_BY_KEY']),
  },
};
</script>
