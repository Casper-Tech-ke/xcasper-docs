import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'XCASPER Hosting',
  tagline: 'Next-generation game server hosting — built for Africa, running globally.',
  favicon: 'img/favicon.ico',

  url: 'https://docs.xcasper.space',
  baseUrl: '/',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/Casper-Tech-ke/xcasper-panel/edit/main/xcasper-docs/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    image: 'img/xcasper-social-card.png',
    navbar: {
      title: 'XCASPER',
      logo: {
        alt: 'XCASPER Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo.svg',
      },
      style: 'dark',
      hideOnScroll: false,
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'panelSidebar',
          position: 'left',
          label: '🖥 Panel',
        },
        {
          type: 'docSidebar',
          sidebarId: 'wingsSidebar',
          position: 'left',
          label: '🔧 Wings',
        },
        {
          type: 'docSidebar',
          sidebarId: 'eggsSidebar',
          position: 'left',
          label: '🥚 Eggs',
        },
        {
          type: 'docSidebar',
          sidebarId: 'billingSidebar',
          position: 'left',
          label: '💳 Billing',
        },
        {
          href: 'https://github.com/Casper-Tech-ke',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://t.me/casper_tech_ke',
          label: '💬 Support',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {label: 'Getting Started', to: '/docs/intro'},
            {label: 'Panel Setup', to: '/docs/panel/introduction'},
            {label: 'Wings Node', to: '/docs/wings/introduction'},
            {label: 'Billing & Wallet', to: '/docs/billing/overview'},
          ],
        },
        {
          title: 'Resources',
          items: [
            {label: 'Panel Repo', href: 'https://github.com/Casper-Tech-ke/xcasper-panel'},
            {label: 'Wings Repo', href: 'https://github.com/Casper-Tech-ke/xcasper-wings'},
            {label: 'Eggs Repo', href: 'https://github.com/Casper-Tech-ke/xcasper-eggs'},
          ],
        },
        {
          title: 'Community',
          items: [
            {label: 'Telegram Support', href: 'https://t.me/casper_tech_ke'},
            {label: 'GitHub — @Casper-Tech-ke', href: 'https://github.com/Casper-Tech-ke'},
            {label: 'Report a Bug', href: 'https://github.com/Casper-Tech-ke/xcasper-panel/issues'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Casper Tech Kenya Developers. Built with ❤ in Kenya.`,
    },
    prism: {
      theme: prismThemes.dracula,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'php', 'nginx', 'ini', 'yaml', 'json', 'typescript'],
    },
    algolia: undefined,
    announcementBar: {
      id: 'xcasper_live',
      content: '👻 XCASPER Hosting is live globally — <a href="https://github.com/Casper-Tech-ke" target="_blank"><strong>star us on GitHub</strong></a> and join <a href="https://t.me/casper_tech_ke" target="_blank"><strong>Telegram</strong></a>!',
      backgroundColor: '#0a0f1a',
      textColor: '#00D4FF',
      isCloseable: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
