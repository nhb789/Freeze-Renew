const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  testMatch: '**/*.spec.js',
  timeout: 300000,
  retries: 2,
  use: {
    headless: true,
  },
});
