import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug/',
    component: ComponentCreator('/__docusaurus/debug/', 'bc0'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config/',
    component: ComponentCreator('/__docusaurus/debug/config/', 'de6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content/',
    component: ComponentCreator('/__docusaurus/debug/content/', '9f5'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData/',
    component: ComponentCreator('/__docusaurus/debug/globalData/', '253'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata/',
    component: ComponentCreator('/__docusaurus/debug/metadata/', '585'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry/',
    component: ComponentCreator('/__docusaurus/debug/registry/', '24b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes/',
    component: ComponentCreator('/__docusaurus/debug/routes/', '518'),
    exact: true
  },
  {
    path: '/markdown-page/',
    component: ComponentCreator('/markdown-page/', '30d'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'b4a'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '96c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/buildings/',
        component: ComponentCreator('/buildings/', '52c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/contact/',
        component: ComponentCreator('/contact/', 'e86'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/discounts/',
        component: ComponentCreator('/discounts/', 'f5b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/facilities/about-dcs-servers/',
        component: ComponentCreator('/facilities/about-dcs-servers/', '566'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/facilities/lab-info/',
        component: ComponentCreator('/facilities/lab-info/', '2d3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/facilities/ryerson-cs-setup/',
        component: ComponentCreator('/facilities/ryerson-cs-setup/', 'c01'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/faq/',
        component: ComponentCreator('/faq/', 'ebd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/software/',
        component: ComponentCreator('/software/', '7b5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/tips/',
        component: ComponentCreator('/tips/', '50d'),
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
