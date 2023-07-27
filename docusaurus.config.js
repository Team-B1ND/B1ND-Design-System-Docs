// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const config = {
  title: "B1ND-Design-System",
  tagline: "Bind more easily",
  favicon: "img/favicon.ico",
  url: "https://Team-B1ND.github.io",
  baseUrl: "/B1ND-Design-System/",
  organizationName: "Team-B1ND", // Usually your GitHub org/user name.
  projectName: "B1ND-Design-System", // Usually your repo name.
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  trailingSlash: false,
  i18n: {
    defaultLocale: "ko",
    locales: ["en", "ko"],
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Form B1nding",
      logo: {
        alt: "B1nd Logo",
        src: "img/dodamLogo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "b1nd-design-core/b1nd-design-core",
          position: "left",
          label: "Docs",
        },
        {
          href: "https://github.com/Team-B1ND/Form-B1nding",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Docs",
              to: "/docs/b1nd-design-core",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/Team-B1ND/Form-B1nding-Docs",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Team-B1nd Inc.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};

module.exports = config;
