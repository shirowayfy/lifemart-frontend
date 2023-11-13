<template>
  <div class="member-item">
    <NuxtImg
      width="50"
      height="50"
      src="/demo-user.png"
      class="member-item__img"
    />
    <div class="member-item__info">
      <p class="member-item__name">Пётр Петров</p>
      <p class="member-item__place">Жизньмарт (ул. Ленина д. 31)</p>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.member-item {
  display: flex;
  align-items: center;
  gap: 15px;

  &__name {
    font-size: 15px;
    line-height: 20px;
  }

  &__place {
    font-size: 13px;
    line-height: 20px;
    color: rgba(12, 31, 26, 0.5);
  }
}
</style>
