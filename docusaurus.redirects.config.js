// TODO: remove each redirect after a year or so…
export default {
  redirects: [
    {
      // Redirected on 2024-03-03
      from: ['/docs/extensions/netsuite/common-errors'],
      to: '/docs/learn/netsuite',
    },
    {
      // Redirected on 2024-09-18
      from: ['/docs/learn/coupa/coupa-integration-setup'],
      to: '/docs/learn/coupa/integration-setup',
    },
    {
      // Redirected on 2024-09-18
      from: [
        '/docs/learn/coupa/coupa-import-setup',
        '/docs/learn/coupa/coupa-import-configuration-examples',
      ],
      to: '/docs/learn/coupa/import-configuration',
    },
    {
      // Redirected on 2024-09-18
      from: [
        '/docs/learn/coupa/coupa-export-setup',
        '/docs/learn/coupa/coupa-export-configuration-examples',
      ],
      to: '/docs/learn/coupa/export-configuration',
    },
    {
      // Redirected on 2024-09-18
      from: ['/docs/learn/coupa/coupa-oauth-scopes'],
      to: '/docs/learn/coupa/oauth-scopes',
    },
    {
      // Redirected on 2024-09-18
      from: ['/docs/learn/coupa/coupa-postman-collection'],
      to: '/docs/learn/coupa/postman-collection',
    },
    {
      // Redirected on 2024-09-18
      from: ['/docs/learn/coupa/coupa-workflow-example'],
      to: '/docs/learn/coupa/workflow-example',
    },
    {
      // Redirected on 2024-12-19
      from: ['/docs/learn/sso'],
      to: '/docs/learn/user-management/sso',
    },
  ],
  createRedirects(existingPath) {
    if (existingPath.includes('/docs/learn/')) {
      return [
        // Redirected on 2024-06-27
        existingPath.replace('/docs/learn/', '/docs/extensions/'), // /docs/extensions/coupa → /docs/learn/coupa
      ];
    }
    return undefined; // Return a falsy value: no redirect created
  },
};
