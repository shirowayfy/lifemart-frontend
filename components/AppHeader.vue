<template>
  <header class="header">
    <h1 class="header__title">Служба заботы | Помощь</h1>
    <AccountInfoBar />
  </header>
</template>

<script setup></script>

<style lang="scss" scoped>
.header {
  height: 90px;
  text-align: center;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid $border-color;
  padding: 0 25px;

  &__title {
    font-size: 32px;
  }
}
</style>
