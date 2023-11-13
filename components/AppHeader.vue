<template>
  <header class="header">
    <div class="container">
      <h1 class="header__page-title">Служба заботы | Приступить к работе</h1>
      <div class="header__user">
        <NuxtImg
          src="/demo-user.png"
          width="50"
          height="50"
          class="header__user-avatar"
        />
        <div class="header__user-info">
          <p class="header__user-name">Иванов Иван</p>
          <p class="header__user-role">Сотрудник СЗ</p>
        </div>
        <button class="btn header__user-logout">
          Выйти
          <!--<NuxtIcon name="logout" filled />-->
        </button>
      </div>
    </div>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped>
.header {
  border-bottom: 1px solid $border-color;
  height: 90px;
  background: #fff;
  flex-shrink: 0;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  &__page-title {
    font-size: 35px;
    font-weight: 700;
    line-height: 20px;

    padding-left: 25px;
  }

  &__user {
    display: flex;
    align-items: center;

    &-avatar {
      margin-right: 15px;
    }

    &-info {
      margin-right: 30px;
      text-align: left;
    }

    &-name {
      font-size: 16px;
    }

    &-role {
      font-size: 14px;
    }

    &-name,
    &-role {
      color: $black;
      font-weight: 400;
      line-height: 20px;
    }
  }
}
</style>
