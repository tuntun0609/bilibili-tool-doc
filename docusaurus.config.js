// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'bilibili tool document',
  tagline: 'Dinosaurs are cool',
  url: 'https://bili-tool-doc.vercel.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  organizationName: 'tuntun0609',
  projectName: 'bilibili-tool-doc',
  trailingSlash: undefined,
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // routeBasePath: '/',
          editUrl:
            'https://github.com/tuntun0609/bilibili-tool-doc/tree/master',
        },
        blog: false,
        // {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'bilibili tool document',
        logo: {
          alt: 'bilibili tool document',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'install/from-releases',
            position: 'right',
            label: '文档',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/tuntun0609/bilibil-tool-mv3',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docs',
                to: '/docs/install/from-releases',
              },
            ],
          },
          {
            title: 'Github',
            items: [
              {
                label: 'bilibili-tool',
                to: 'https://github.com/tuntun0609/bilibil-tool-mv3',
              },
              {
                label: 'bilibili-tool-doc',
                to: 'https://github.com/tuntun0609/bilibili-tool-doc',
              },
            ],
          },
          {
            title: 'Author',
            items: [
              {
                label: 'github',
                to: 'https://github.com/tuntun0609',
              },
              {
                label: 'bilibili',
                to: 'https://space.bilibili.com/47706697',
              },
            ],
          },
        ],
        // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
    }),
};

module.exports = config;
