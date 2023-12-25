<template>
  <div class="auth">
    <div class="auth__left">
      <img class="auth__logo" src="/logo-white.svg" alt="" />
    </div>
    <div class="auth__right">
      <form class="auth__form" @submit.prevent="submit">
        <h1 class="auth__title">Войти в аккаунт</h1>
        <span>Логин</span>
        <BaseInput v-model="email" />
        <span>Пароль</span>
        <BaseInput v-model="password" type="password" />
        <BaseButton>Войти</BaseButton>
      </form>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "empty",
});

const { setUser } = useAppStore();

const { login } = useStrapiAuth();
const router = useRouter();

const email = ref("alex@gmail.com");
const password = ref("qwerty");

const submit = async () => {
  try {
    await login({ identifier: email.value, password: password.value });

    const user = useStrapiUser();

    if (user.value) {
      setUser(user.value);
    }

    router.push("/");
  } catch (e) {}
};
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
