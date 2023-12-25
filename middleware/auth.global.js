export default defineNuxtRouteMiddleware((to, from) => {
  const user = useStrapiUser();
  if (!user.value && to.path !== "/auth") {
    return navigateTo("/auth");
  }
});
