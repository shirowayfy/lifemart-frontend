<template>
  <div class="message">
    <div class="message__content">
      <slot></slot>
    </div>
    <div class="message__time">{{ formattedTime }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  time: {
    type: String,
  },
});

const formattedTime = computed(() => {
  return new Date(props.time).toLocaleTimeString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  });
});
</script>

<style lang="scss" scoped>
.message {
  border-radius: 10px;
  background: $pale-green;
  width: fit-content;
  max-width: 45%;
  padding: 12px 15px;
  display: flex;
  align-items: flex-start;
  gap: 10px;

  &.to {
    align-self: flex-end;
    background: rgba(63, 158, 55, 0.16);
  }

  &__time {
    font-size: 13px;
    display: inline-block;
    margin-top: auto;
    color: rgba(12, 31, 26, 0.5);
  }
}
</style>
