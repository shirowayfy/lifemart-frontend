<template>
  <button class="base-icon-button">
    <Icon :size="size" :name="icon" />
  </button>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    required: true,
  },
  size: {
    type: [Number, String],
    default: 18,
  },
});
</script>

<style lang="scss" scoped>
.base-icon-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid $border-color;
  flex-shrink: 0;
  background: transparent;
}
</style>
