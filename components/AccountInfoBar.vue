<template>
  <div class="account-info">
    <img src="/demo-user.jpeg" alt="" class="account-info__image" />
    <div class="account-info__content">
      <p class="account-info__name">{{ user.username }}</p>
      <p class="account-info__role">Сотрудник СЗ</p>
    </div>
    <button class="btn account-info__logout" @click="logout">
      <span>Выйти</span>
      <Icon class="account-info__logout-icon" name="ph:sign-out" filled />
    </button>
  </div>
</template>

<script setup>
const store = useAppStore();
const { logout } = store;

const user = useStrapiUser();
</script>

<style lang="scss" scoped>
.account-info {
  display: flex;
  align-items: center;

  &__image {
    width: 50px;
    height: 50px;

    margin-right: 15px;
    border-radius: 50%;
    object-fit: cover;
    border: 1px solid $border-color;
  }

  &__content {
    margin-right: 30px;
    text-align: left;
  }

  &__name {
    color: $black;
    font-weight: 400;
    line-height: 20px;
  }

  &__role {
    font-size: 14px;
    color: $grey;
  }

  &__logout {
    display: flex;
    align-items: center;
    gap: 10px;

    &-icon {
      font-size: 16px;
    }
  }
}
</style>
