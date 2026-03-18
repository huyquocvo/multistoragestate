// playwright.config.ts

import { defineConfig,devices } from "@playwright/test";
// import type { APIRequestOptions } from "./lib/fixtures/apiRequest";
// import { TestOptions } from "./lib/pages";

require("dotenv").config();

export default defineConfig({

  projects: [
    { 
      name: "setup", 
      testMatch: /.*\.setup\.ts/, 
      fullyParallel: false 

    },
    {
      name: "ui-tests",
      use: {
        ...devices['Desktop Chrome'],
        //storageState: '.auth/admin.json', // Path from setup
      },
      dependencies: ['setup'],
    },
  ],
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [["html"], ["list"]],
  use: {
    baseURL: process.env.BASE_URL,
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: 90 * 500,
    navigationTimeout: 90 * 500,
    trace: 'on-first-retry',
    testIdAttribute: 'data-test'
  },
});