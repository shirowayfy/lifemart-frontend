<template>
  <div>
    <div class="content">
      <AppSidebar />
      <main class="h-screen main">
        <AppHeader v-if="user" />
        <slot class="main__content" />
      </main>
    </div>
  </div>
</template>

<script setup>
const user = useStrapiUser();
</script>
