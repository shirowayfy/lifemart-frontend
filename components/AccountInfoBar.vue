<template>
  <div class="account-info">
    <img src="/demo-user.png" alt="" class="account-info__image" />
    <div class="account-info__content">
      <p class="account-info__name">Иванов Иван</p>
      <p class="account-info__role">Сотрудник СЗ</p>
    </div>
    <button class="btn account-info__logout">
      <Icon class="account-info__logout-icon" name="ph:user" filled />
      <span>Профиль</span>
    </button>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.account-info {
  display: flex;
  align-items: center;

  &__image {
    width: 50px;
    height: 50px;

    margin-right: 15px;
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
    &-icon {
      font-size: 16px;
      margin-right: 10px;
    }
  }
}
</style>
