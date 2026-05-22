// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://nileshpatva.github.io",
  base: "/studio-statics",
  trailingSlash: "always",
  // redirects: {
  //   "/queendom/privacy": "/queendom/privacy/",
  //   "/queendom/terms": "/queendom/terms/",
  //   "/studio-statics": "/studio-statics/",
  // },
});
