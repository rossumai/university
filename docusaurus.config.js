// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Rossum.ai University',
  tagline: 'Build something meaningful with Rossum.ai',
  favicon: 'img/128-blue-crunch.png',

  // Set the production url of your site here
  url: 'https://rossum.university',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'rossumai', // Usually your GitHub org/user name.
  projectName: 'university', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',
  onBrokenMarkdownLinks: 'throw',
  onDuplicateRoutes: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        // fromExtensions: ['html', 'htm'], // /myPage.html -> /myPage
        // toExtensions: ['exe', 'zip'], // /myAsset -> /myAsset.zip (if latter exists)
        redirects: [
          // Redirect from multiple old paths to the new path
          {
            from: ['/docs/extensions/netsuite/common-errors'],
            to: '/docs/extensions/netsuite',
          },
        ],
        // createRedirects(existingPath) {
        //   if (existingPath.includes('/community')) {
        //     // Redirect from /docs/team/X to /community/X and /docs/support/X to /community/X
        //     return [
        //       existingPath.replace('/community', '/docs/team'),
        //       existingPath.replace('/community', '/docs/support'),
        //     ];
        //   }
        //   return undefined; // Return a falsy value: no redirect created
        // },
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // Will be passed to @docusaurus/plugin-content-docs (false to disable)
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/rossumai/university/tree/master/',
        },
        blog: false,
        theme: {
          // Will be passed to @docusaurus/theme-classic.
          customCss: './src/css/custom.css',
        },
        gtag: {
          // Will be passed to @docusaurus/plugin-google-gtag (only enabled when explicitly specified)
          trackingID: 'G-2DBTH3BGYK',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/og_image.png',
      navbar: {
        title: 'Rossum.ai University',
        logo: {
          alt: 'Rossum.ai Logo',
          src: 'img/128-blue-crunch.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'extensionsSidebar',
            position: 'left',
            label: 'Extensions',
          },
          {
            href: 'https://elis.rossum.ai/api/docs/',
            label: 'API Reference',
            position: 'left',
          },

          // See: http://localhost:3000/docs/docusaurus/intro
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'docusaurusSidebar',
          //   position: 'left',
          //   label: 'Docusaurus',
          // },

          // http://localhost:3000/blog
          // {
          //   to: '/blog',
          //   label: 'Blog',
          //   position: 'left',
          // },

          {
            href: 'https://rossum.ai/',
            label: 'Rossum.ai',
            position: 'right',
          },
          {
            href: 'https://status.rossum.ai/',
            label: 'Status page',
            position: 'right',
          },
          {
            href: 'https://github.com/rossumai/university',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Integrations',
          //   items: [
          //     {
          //       label: 'NetSuite',
          //       to: '/docs/category/netsuite',
          //     },
          //   ],
          // },
          // {
          //   title: 'Extensions',
          //   items: [
          //     {
          //       label: 'Master Data Hub',
          //       to: '/docs/category/master-data-hub',
          //     },
          //   ],
          // },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/rossumai/university',
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Rossum.ai`,
      },
      announcementBar: {
        content:
          '🚧 Work in progress. <strong>Leave <a href="https://github.com/rossumai/university/discussions" target="_blank">your feedback</a></strong>. 🚧',
        backgroundColor: '#fff8e6',
        isCloseable: false,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'json', 'python'],
      },
      algolia: {
        // See: https://docusaurus.io/docs/search#using-algolia-docsearch
        appId: 'KUCN9RVGHJ',
        apiKey: '6e2abd4bca7442bb8e7bce44cee801ec', // Public API key: it is safe to commit it
        indexName: 'rossum-university',
        contextualSearch: true,
        searchParameters: {},
        searchPagePath: 'search',
        insights: false,
      },
    }),
};

export default config;
