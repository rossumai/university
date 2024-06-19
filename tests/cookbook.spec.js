const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Rossum.ai University | Rossum.ai University/);
});

test('homepage', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading')).toContainText('Rossum.ai University');
  await expect(page.getByRole('paragraph')).toContainText(
    'Build something meaningful with Rossum.ai',
  );
});

test('main navigation (Extensions)', async ({ page }) => {
  await page.goto('/');

  await page.getByLabel('Main', { exact: true }).getByRole('link', { name: 'Extensions' }).click();
  await expect(page.locator('h1')).toContainText('Business Rules Validation');
});
