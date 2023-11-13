<template>
  <aside class="sidebar">
    <NuxtLink to="/" class="sidebar__logo">
      <NuxtImg src="/logo.svg" alt="" />
    </NuxtLink>
    <div class="sidebar__items">
      <NuxtLink
        v-for="button in buttons"
        :key="button.icon"
        to="#"
        class="sidebar__items-btn"
        role="button"
      >
        <NuxtIcon :name="`${button.icon}`" filled />
      </NuxtLink>
    </div>
  </aside>
</template>

<script setup>
const buttons = [
  {
    icon: "pen",
    href: "#",
  },
  {
    icon: "stats",
    href: "#",
  },
  {
    icon: "list",
    href: "#",
  },
];
</script>

<style lang="scss">
.sidebar {
  height: 100vh;
  width: 90px;
  background: #fff;

  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;

  border-right: 1px solid $border-color;

  &__logo {
    padding: 10px;
    width: 90px;
    height: 90px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-bottom: 1px solid $border-color;

    img {
      width: 100%;
      height: 100%;
    }
  }

  &__items {
    width: 90px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    padding: 20px;

    &-btn {
      padding: 13px;

      border-radius: 50%;
      border: 1px solid $primary;

      transition: all 0.2s;
      & .nuxt-icon {
        width: 22px;
        height: 22px;
        display: flex;

        svg {
          font-size: 22px;
        }
      }

      &:hover,
      &.active {
        --fill-color: $primary;
        --icon-color: white;
        background: $primary;
      }
    }
  }
}
</style>
