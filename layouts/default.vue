<template>
  <div>
    <div class="content">
      <AppSidebar />
      <main class="h-screen main">
        <AppHeader />
        <slot class="main__content" />
      </main>
    </div>
  </div>
</template>
