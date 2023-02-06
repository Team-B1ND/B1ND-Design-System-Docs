import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '682'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '830'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '80a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'b8e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '7b4'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '2a3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '2a5'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '0c1'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '779'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '260'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '26d'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '536'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'b65'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '0b2'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '2b5'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '138'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '8b2'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '3e7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '165'),
    routes: [
      {
        path: '/docs/b1nd-design-core/congratulations',
        component: ComponentCreator('/docs/b1nd-design-core/congratulations', 'e80'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/b1nd-design-core/create-a-blog-post',
        component: ComponentCreator('/docs/b1nd-design-core/create-a-blog-post', '673'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/b1nd-design-core/create-a-document',
        component: ComponentCreator('/docs/b1nd-design-core/create-a-document', '9c2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/b1nd-design-core/create-a-page',
        component: ComponentCreator('/docs/b1nd-design-core/create-a-page', 'e0c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/b1nd-design-core/deploy-your-site',
        component: ComponentCreator('/docs/b1nd-design-core/deploy-your-site', '44c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/b1nd-design-core/markdown-features',
        component: ComponentCreator('/docs/b1nd-design-core/markdown-features', '932'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/b1nd-dodam-common-ui/manage-docs-versions',
        component: ComponentCreator('/docs/b1nd-dodam-common-ui/manage-docs-versions', '565'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/b1nd-dodam-common-ui/translate-your-site',
        component: ComponentCreator('/docs/b1nd-dodam-common-ui/translate-your-site', '504'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/b1nd-react-util/asdad',
        component: ComponentCreator('/docs/b1nd-react-util/asdad', '3c8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/b1nd-styled-components-theme/asdsadad',
        component: ComponentCreator('/docs/b1nd-styled-components-theme/asdsadad', 'c46'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/b1nd-styled-components-util/asdsad',
        component: ComponentCreator('/docs/b1nd-styled-components-util/asdsad', '8af'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/b1ndb1nd-design-core',
        component: ComponentCreator('/docs/category/b1ndb1nd-design-core', '01b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/b1ndb1nd-dodam-common-ui',
        component: ComponentCreator('/docs/category/b1ndb1nd-dodam-common-ui', 'eea'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/b1ndb1nd-react-util',
        component: ComponentCreator('/docs/category/b1ndb1nd-react-util', 'f76'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/b1ndb1nd-styled-components-theme',
        component: ComponentCreator('/docs/category/b1ndb1nd-styled-components-theme', '038'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/b1ndb1nd-styled-components-util',
        component: ComponentCreator('/docs/category/b1ndb1nd-styled-components-util', 'a28'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '1f7'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
