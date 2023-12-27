<template>
  <label
    for="test"
    class="base-input"
    :class="{ 'with-icon': !!icon, disabled }"
  >
    <Icon size="20" v-if="icon" class="nav-link__icon" :name="icon" />
    <input
      v-model="modelValue"
      :placeholder="placeholder"
      :type="type"
      :disabled="disabled"
      ref="input"
    />
  </label>
</template>

<script setup>
const modelValue = defineModel();
const input = ref(null);

defineProps({
  icon: {
    type: String,
  },
  placeholder: {
    type: String,
  },
  type: {
    type: String,
    default: "text",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

defineExpose({
  focus: () => input.value.focus(),
});
</script>

<style lang="scss" scoped>
.base-input {
  display: flex;
  position: relative;
  border-radius: 10px;
  border: 1px solid $border-color;
  overflow: hidden;
  width: 100%;

  &.disabled {
    pointer-events: none;

    input {
      background: $pale-green;
    }
  }

  &.with-icon {
    input {
      padding-left: 32px;
    }
  }

  input {
    width: 100%;
    padding: 8px;
    margin: 0;
    border: none;
    font-size: 16px;
    background: #f2f9ff;
  }

  .icon {
    position: absolute;
    left: 8px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
