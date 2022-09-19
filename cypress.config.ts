import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'wimgk8',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
