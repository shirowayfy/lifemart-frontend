export const useAssets = (path) => {
  const assets = import.meta.glob("~/assets/**/*", {
    eager: true,
    import: "default",
  });
  // @ts-expect-error: wrong type info
  return assets["/assets/" + path];
};
