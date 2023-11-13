// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/styles/base.scss"],
  vite: {
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
  modules: ["@nuxt/image", "nuxt-icons"],
});
