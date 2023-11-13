<template>
  <div class="app">
    <AppHeader />
    <AppSidebar />
    <div class="container page">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
.app {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.page {
  flex-grow: 1;
  overflow: auto;
}
</style>
