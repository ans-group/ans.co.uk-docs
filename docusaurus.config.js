// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "ANS Documentation",
  tagline:
    "For help with ANS products and services, and guidance with common hosting technology.",
  favicon: "img/ANS_White_title.svg",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "ANS", // Usually your GitHub org/user name.
  projectName: "ans.co.uk-docs", // Usually your repo name.

  onBrokenLinks: "ignore",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  themes: [
    [require.resolve("@easyops-cn/docusaurus-search-local"), { hashed: true }],
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/ans-group/ans.co.uk-docs/tree/main/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/ans-group/ans.co.uk-docs/tree/main/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "",
        logo: {
          alt: "ANS Logo",
          src: "img/ANS_White_title.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "documentationSidebar",
            position: "left",
            label: "Documentation",
          },
          {
            href: "https://github.com/ans-group/ans.co.uk-docs#",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",

        links: [
          {
            title: "Solutions",
            items: [
              {
                label: "Managed Cloud",
                href: "https://www.ans.co.uk/cloud-services/",
              },
              {
                label: "Azure Managed Services",
                href: "https://www.ans.co.uk/cloud-services/azure/",
              },
              {
                label: "AWS Managed Services",
                href: "https://www.ans.co.uk/cloud-services/aws/",
              },
              {
                label: "Dynamics 365",
                href: "https://www.ans.co.uk/dynamics-365/",
              },
              {
                label: "Private Cloud",
                href: "https://www.ans.co.uk/cloud-services/private-cloud/",
              },
              {
                label: "Low-code Platform",
                href: "https://www.ans.co.uk/low-code-platform/",
              },
              {
                label: "Managed Security",
                href: "https://www.ans.co.uk/managed-security-services/",
              },
              {
                label: "Data & AI",
                href: "https://www.ans.co.uk/data-ai/",
              },
              {
                label: "Channel",
                href: "https://ans.co.uk/channel",
              },
            ],
          },
          {
            title: "About ANS",
            items: [
              {
                label: "Our Company",
                href: "https://www.ans.co.uk/our-company/",
              },
              {
                label: "Our Partners",
                href: "https://www.ans.co.uk/our-partners/",
              },
              {
                label: "Our UK Data Centres",
                href: "https://www.ans.co.uk/data-centres/",
              },
              {
                label: "ANS Reviews",
                href: "https://www.ans.co.uk/our-company/ans-reviews/",
              },
              {
                label: "Insights",
                href: "https://www.ans.co.uk/insights/",
              },
              {
                label: "Terms & Conditions",
                href: "https://www.ans.co.uk/terms-and-conditions/",
              },
              {
                label: "Corporate Guidance",
                href: "https://www.ans.co.uk/corporate-guidance/",
              },
            ],
          },
          {
            title: "Careers",
            items: [
              {
                label: "Careers",
                href: "https://www.ans.co.uk/careers/",
              },
              {
                label: "Open Roles",
                href: "https://www.ans.co.uk/careers/open-roles/",
              },
              {
                label: "Why work at ANS",
                href: "https://www.ans.co.uk/careers/why-work-at-ans/",
              },
              {
                label: "Life at ANS",
                href: "https://www.ans.co.uk/careers/life-at-ans/",
              },
              {
                label: "Apprenticeships",
                href: "https://www.ans.co.uk/careers/apprenticeships/",
              },
            ],
          },
          {
            title: "Get in Touch",
            items: [
              {
                label: "SALES: 0800 458 4545",
                href: "tel:08004584545",
              },
              {
                label: "SUPPORT: 0800 230 0032",
                href: "tel:08002300032",
              },
            ],
          },
          {
            title: "Support",
            items: [
              {
                label: "Get in touch",
                href: "https://www.ans.co.uk/lets-talk/",
              },
              {
                label: "ANS Glass",
                href: "https://ans.glass",
              },
              {
                label: "Press & Media Enquiries",
                href: "https://www.ans.co.uk/press-enquiries/",
              },
            ],
          },
        ],
        // copyright: `© ANS Group LTD ${new Date().getFullYear()}. All rights reserved.`,
        copyright: `
            <div>
              <p>© ANS Group LTD ${new Date().getFullYear()}. All rights reserved.</p>
              <p>ANS Group Limited, registered in England and Wales, company registration number 03176761, registered office 1 Archway, Birley Fields, Manchester M15 5QJ</p>
            </div>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
