<template>
  <div class="auth">
    <div class="auth__left">
      <img class="auth__logo" src="/logo-white.svg" alt="" />
    </div>
    <div class="auth__right">
      <div class="auth__form">
        <h1 class="auth__title">Войти в аккаунт</h1>
        <span>Логин</span>
        <BaseInput />
        <span>Пароль</span>
        <BaseInput type="password" />
        <BaseButton @click="$router.push('/')">Войти</BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "empty",
});
</script>

<style lang="scss" scoped>
.auth {
  display: grid;
  grid-template-columns: 2fr 1fr;

  height: 100vh;
  width: 100vw;

  &__left {
    background: #13332b;
  }

  &__right,
  &__left {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__right {
    color: #000;

    & .auth__form {
      width: 300px;
    }

    & .base-input {
      margin-bottom: 15px;
    }

    & .base-button {
      width: 100%;
    }
  }

  &__logo {
    width: 300px;
  }

  &__title {
    font-size: 32px;
    text-align: center;
    margin-bottom: 15px;
  }
}
</style>
