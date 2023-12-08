<template>
  <button class="base-simple-button">
    <slot />
  </button>
</template>

<script setup></script>

<style lang="scss" scoped>
.base-simple-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid $border-color;
  flex-shrink: 0;
  background: transparent;
  cursor: pointer;

  &.green {
    background: $primary;
    color: #fff;
  }
}
</style>
