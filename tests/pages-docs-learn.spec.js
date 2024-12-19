const { test, expect } = require('@playwright/test');

[
  { path: '/', title: 'Rossum.ai University | Rossum.ai University' },
  {
    path: '/docs/learn/ai-learning',
    title: 'AI training best practices | Rossum.ai University',
  },
  {
    path: '/docs/learn/business-rules-validation',
    title: 'Business Rules Validation | Rossum.ai University',
  },
  {
    path: '/docs/learn/copy-paste-values',
    title: 'Copy & Paste Values | Rossum.ai University',
  },
  {
    path: '/docs/learn/coupa',
    title: 'Coupa | Rossum.ai University',
  },
  {
    path: '/docs/learn/find-replace-values',
    title: 'Find & Replace Values | Rossum.ai University',
  },
  {
    path: '/docs/learn/json-templating',
    title: 'JSON Templating | Rossum.ai University',
  },
  {
    path: '/docs/learn/line-items-grouping',
    title: 'Line items grouping | Rossum.ai University',
  },
  {
    path: '/docs/learn/master-data-hub',
    title: 'Master data hub | Rossum.ai University',
  },
  {
    path: '/docs/learn/netsuite',
    title: 'NetSuite | Rossum.ai University',
  },
  {
    path: '/docs/learn/rossum-formulas',
    title: 'Rossum Formulas | Rossum.ai University',
  },
  {
    path: '/docs/learn/sandboxes',
    title: 'Sandboxes | Rossum.ai University',
  },
  {
    path: '/docs/learn/sftp-s3-import-export',
    title: 'SFTP and S3 imports/exports | Rossum.ai University',
  },
  {
    path: '/docs/learn/user-management/sso',
    title: 'User management: Single Sign-On (SSO) | Rossum.ai University',
  },
  {
    path: '/docs/learn/structured-formats-import',
    title: 'Structured formats import | Rossum.ai University',
  },
  {
    path: '/docs/learn/workday',
    title: 'Workday | Rossum.ai University',
  },
].forEach(({ path, title }) => {
  test(`testing path title: ${path}`, async ({ page }) => {
    await page.goto(path);
    await expect(page).toHaveTitle(title);
  });
});
