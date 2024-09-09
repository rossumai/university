const { test, expect } = require('@playwright/test');

[
  { path: '/', title: 'Rossum.ai University | Rossum.ai University' },
  {
    path: '/docs/extensions/business-rules-validation',
    title: 'Business Rules Validation | Rossum.ai University',
  },
  {
    path: '/docs/extensions/copy-paste-values',
    title: 'Copy & Paste Values | Rossum.ai University',
  },
  {
    path: '/docs/extensions/coupa',
    title: 'Coupa | Rossum.ai University',
  },
  {
    path: '/docs/extensions/find-replace-values',
    title: 'Find & Replace Values | Rossum.ai University',
  },
  {
    path: '/docs/extensions/json-templating',
    title: 'JSON Templating | Rossum.ai University',
  },
  {
    path: '/docs/extensions/line-items-grouping',
    title: 'Line items grouping | Rossum.ai University',
  },
  {
    path: '/docs/extensions/master-data-hub',
    title: 'Master data hub | Rossum.ai University',
  },
  {
    path: '/docs/extensions/netsuite',
    title: 'NetSuite | Rossum.ai University',
  },
  {
    path: '/docs/extensions/rossum-formulas',
    title: 'Rossum Formulas | Rossum.ai University',
  },
  {
    path: '/docs/extensions/sandboxes',
    title: 'Sandboxes | Rossum.ai University',
  },
  {
    path: '/docs/extensions/sftp-s3-import-export',
    title: 'SFTP and S3 imports/exports | Rossum.ai University',
  },
  {
    path: '/docs/extensions/sso',
    title: 'Single Sign-On (SSO) | Rossum.ai University',
  },
  {
    path: '/docs/extensions/structured-formats-import',
    title: 'Structured formats import | Rossum.ai University',
  },
  {
    path: '/docs/extensions/workday',
    title: 'Workday | Rossum.ai University',
  },
].forEach(({ path, title }) => {
  test(`testing path title: ${path}`, async ({ page }) => {
    await page.goto(path);
    await expect(page).toHaveTitle(title);
  });
});
