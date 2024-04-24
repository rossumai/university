const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('/cookbook');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Rossum.ai Cookbook | Rossum.ai Cookbook/);
});

test('homepage', async ({ page }) => {
  await page.goto('/cookbook');

  await expect(page.getByRole('heading')).toContainText('Rossum.ai Cookbook');
  await expect(page.getByRole('paragraph')).toContainText('Build something cool with Rossum.ai');
});

test('main navigation (Extensions)', async ({ page }) => {
  await page.goto('/cookbook');

  await page.getByLabel('Main', { exact: true }).getByRole('link', { name: 'Extensions' }).click();
  await expect(page.locator('h1')).toContainText('Business Rules Validation');

  await page.getByRole('link', { name: '📄️ Configuration examples' }).click();
  await expect(page.locator('h1')).toContainText('Configuration examples');
});

test('main navigation (Guides)', async ({ page }) => {
  await page.goto('/cookbook');

  await page.getByLabel('Main', { exact: true }).getByRole('link', { name: 'Guides' }).click();
  await expect(page.locator('h1')).toContainText('Getting Started with Rossum');
});
