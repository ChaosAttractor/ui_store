<template>
  <section>
    <el-input v-model="form.username" placeholder="Логин" />
    <el-input v-model="form.password" placeholder="Пароль" type="password" show-password />
    <el-button @click="login"> Войти </el-button>
  </section>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useAuthStore } from '@/stores/auth.store.js';

export default {
  name: 'AuthPage',
  computed: {
    ...mapState(useAuthStore, ['form']),
  },
  methods: {
    ...mapActions(useAuthStore, ['login']),
  },
};
</script>
