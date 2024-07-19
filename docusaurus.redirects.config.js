export default {
  redirects: [
    // Redirect from multiple old paths to the new path
    {
      from: ['/docs/extensions/netsuite/common-errors'],
      to: '/docs/learn/netsuite',
    },
  ],
  createRedirects(existingPath) {
    if (existingPath.includes('/docs/learn/')) {
      return [
        // /docs/extensions/coupa → /docs/learn/coupa
        existingPath.replace('/docs/learn/', '/docs/extensions/'),
      ];
    }
    return undefined; // Return a falsy value: no redirect created
  },
};
