import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://wild-file-v2-1mcf2mizu-adamwall97.vercel.app/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
