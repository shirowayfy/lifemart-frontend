<template>
  <div class="app">
    <AppSidebar />
    <main class="h-screen main">
      <AppHeader />
      <NuxtPage class="main__content" />
    </main>
  </div>
</template>

<script setup></script>

<style lang="scss">
.app {
  display: flex;
  align-items: flex-start;

  background: #fff;
  min-height: 100vh;
}

.main {
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  &__content {
    flex-grow: 1;
    padding: 25px;
  }
}
</style>
