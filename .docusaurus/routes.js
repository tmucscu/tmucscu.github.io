import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '9d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '4ed'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'cea'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '15d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '9cc'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '072'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '3bb'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '72f'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'dfe'),
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
        component: ComponentCreator('/facilities/ryerson-cs-setup', 'c87'),
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
