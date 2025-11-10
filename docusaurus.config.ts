import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// Docusaurus configuration
const config: Config = {
  title: 'Droplet',
  tagline: 'Droplet is a statically-typed, object-oriented language.',
  favicon: 'img/favicon.ico',

  // Future flags
  future: {
    v4: true,
  },

  // GitHub Pages deployment
  url: 'https://droplet-lang.github.io', // GitHub Pages base URL
  baseUrl: '/docs/',                     // Repo name as path
  organizationName: 'droplet-lang',      // GitHub username/org
  projectName: 'docs',                   // Repo name
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  onBrokenLinks: 'ignore',
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
          editUrl: 'https://github.com/droplet-lang/lang/edit/main/website/', // Point to your repo
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Droplet',
      logo: {
        alt: 'Droplet Logo',
        src: 'img/logo_drop.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {
          href: 'https://github.com/droplet-lang',
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
              label: 'Tutorial',
              to: '/docs/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/droplet-lang',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Droplet. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
