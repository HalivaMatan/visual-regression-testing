import { test, expect } from "@playwright/test";
const percySnapshot = require("@percy/playwright");

test("basic test", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await page.locator("text=Get started").click();
  percySnapshot(page, "Example Site");
  await expect(page).toHaveTitle(/Getting started/);
});
