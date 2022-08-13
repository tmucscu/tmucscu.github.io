import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '3f0'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'b92'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '93b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '18f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '1e5'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '68d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '0c1'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '2b3'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '63c'),
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
        path: '/campus',
        component: ComponentCreator('/campus', '9e8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/category/using-the-tmu-cs-facilities',
        component: ComponentCreator('/category/using-the-tmu-cs-facilities', '271'),
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
        path: '/faq',
        component: ComponentCreator('/faq', '204'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/intro-facilities/about-dcs-servers',
        component: ComponentCreator('/intro-facilities/about-dcs-servers', '60e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/intro-facilities/lab-info',
        component: ComponentCreator('/intro-facilities/lab-info', 'c88'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/intro-facilities/ryerson-cs-setup',
        component: ComponentCreator('/intro-facilities/ryerson-cs-setup', '320'),
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
