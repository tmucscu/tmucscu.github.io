import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'ed2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'a9a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '9d3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'bdd'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'ef8'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '6c1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'd23'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '6c7'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '206'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '96c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/buildings',
        component: ComponentCreator('/buildings', '894'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/contact',
        component: ComponentCreator('/contact', '820'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/discounts',
        component: ComponentCreator('/discounts', '053'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/facilities/about-dcs-servers',
        component: ComponentCreator('/facilities/about-dcs-servers', 'd19'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/facilities/lab-info',
        component: ComponentCreator('/facilities/lab-info', '2ec'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/facilities/ryerson-cs-setup',
        component: ComponentCreator('/facilities/ryerson-cs-setup', '8ea'),
        exact: true
      },
      {
        path: '/facilities/tmu-cs-setup',
        component: ComponentCreator('/facilities/tmu-cs-setup', '633'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/faq',
        component: ComponentCreator('/faq', '204'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/software',
        component: ComponentCreator('/software', '311'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tips',
        component: ComponentCreator('/tips', '960'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
