const { test, expect } = require('@playwright/test');

test('homepage', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading')).toContainText('Rossum.ai University');
  await expect(page.getByRole('paragraph')).toContainText('Build something cool with Rossum.ai');
});

test('main navigation (Learn button)', async ({ page }) => {
  await page.goto('/');

  await page.getByLabel('Main', { exact: true }).getByRole('link', { name: 'Learn' }).click();
  await expect(page.locator('h1')).toContainText('AI training best practices');
});

test('main navigation (Watch button)', async ({ page }) => {
  await page.goto('/');

  await page.getByLabel('Main', { exact: true }).getByRole('link', { name: 'Watch' }).click();
  await expect(page.locator('h2').first()).toContainText('Rossum e-invoicing for Germany');
});
