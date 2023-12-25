// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/styles/base.scss"],
  vite: {
    vue: {
      script: {
        defineModel: true,
        propsDestructure: true,
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          sourceMap: false,
          additionalData(source, fp) {
            if (fp.endsWith("_vars.scss")) return source;
            return `@import "@/assets/styles/_vars.scss"; ${source}`;
          },
        },
      },
    },
  },
  ssr: false,
  image: {
    provider: "netlify",
  },
  icon: {
    size: "24px", // default <Icon> size applied
    class: "icon", // default <Icon> class applied
  },
  modules: ["@nuxt/image", "nuxt-icon", "@pinia/nuxt", "@nuxtjs/strapi"],
  pinia: {
    storesDirs: ["./stores/**"],
  },
});
