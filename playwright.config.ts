import { defineConfig, devices } from "playwright/test";
import testprops from './config.json'
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */

export default defineConfig({
  timeout: 20000,
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : testprops.workers,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like await page.goto('/'). */
    baseURL: testprops.baseUrl,

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    { name: 'config', testMatch: /.*\.config.ts/ },
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],  
      },
      dependencies: ['config'],
      teardown: 'teardown'
    },

    {
      name: 'firefox',
      use: { 
        ...devices['Desktop Firefox'], 
      },
      dependencies: ['config'],
      teardown: 'teardown'
    },

    {
      name: 'webkit',
      use: { 
        ...devices['Desktop Safari'],
       },
      dependencies: ['config'],
      teardown: 'teardown'
    },
    {name: 'teardown', testMatch: /.*\.teardown.ts/}
  ]})