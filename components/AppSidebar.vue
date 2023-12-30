<template>
  <aside class="h-screen sidebar">
    <NuxtLink to="/" class="logo">
      <NuxtImg class="logo__icon" src="/logo.svg" alt="" />
    </NuxtLink>
    <nav class="nav">
      <ul class="nav__links">
        <li class="nav__links-item active">
          <NuxtLink class="nav-link" to="/">
            <Icon class="nav-link__icon" name="ph:chat-text" />
          </NuxtLink>
        </li>
        <li class="nav__links-item">
          <NuxtLink class="nav-link" to="/stats">
            <Icon class="nav-link__icon" name="ph:chart-line" />
          </NuxtLink>
        </li>
        <!--<li class="nav__links-item">
          <NuxtLink class="nav-link" to="/profile">
            <Icon class="nav-link__icon" name="ph:address-book" />
          </NuxtLink>
        </li>-->
      </ul>
    </nav>
  </aside>
</template>

<script setup></script>

<style lang="scss" scoped>
.sidebar {
  border-right: 1px solid $border-color;
}

.logo {
  display: block;
  padding: 8px;
  border-bottom: 1px solid $border-color;

  height: 90px;

  margin-bottom: 25px;

  &__icon {
    width: 75px;
  }
}

.nav {
  &__links {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    &-item a {
      border-radius: 8px;
      transition: all 0.2s;
      color: darkgray;

      &.router-link-active,
      &:hover {
        background: rgba($primary, 0.1);
        color: $primary;
      }
    }
  }

  .nav-link {
    display: block;
    text-align: center;

    padding: 8px;

    &__icon {
      font-size: 28px;
    }
  }
}
</style>
