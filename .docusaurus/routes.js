import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
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
