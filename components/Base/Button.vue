<template>
  <button class="base-button">
    <slot></slot>
  </button>
</template>

<script setup></script>

<style lang="scss" scoped>
.base-button {
  padding: 10px 20px;
  border-radius: 10px;
  border: 1px solid $border-color;
  background: $primary;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
}
</style>
