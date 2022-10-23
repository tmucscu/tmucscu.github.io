import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
<<<<<<< HEAD
    component: ComponentCreator('/__docusaurus/debug', '9d6'),
=======
    component: ComponentCreator('/__docusaurus/debug', '08c'),
>>>>>>> ad8d42b1e68ec155e502d499dc804a7f20fc67d8
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
<<<<<<< HEAD
    component: ComponentCreator('/__docusaurus/debug/config', '4ed'),
=======
    component: ComponentCreator('/__docusaurus/debug/config', '97f'),
>>>>>>> ad8d42b1e68ec155e502d499dc804a7f20fc67d8
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
<<<<<<< HEAD
    component: ComponentCreator('/__docusaurus/debug/content', 'cea'),
=======
    component: ComponentCreator('/__docusaurus/debug/content', '902'),
>>>>>>> ad8d42b1e68ec155e502d499dc804a7f20fc67d8
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
<<<<<<< HEAD
    component: ComponentCreator('/__docusaurus/debug/globalData', '15d'),
=======
    component: ComponentCreator('/__docusaurus/debug/globalData', '358'),
>>>>>>> ad8d42b1e68ec155e502d499dc804a7f20fc67d8
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
<<<<<<< HEAD
    component: ComponentCreator('/__docusaurus/debug/metadata', '9cc'),
=======
    component: ComponentCreator('/__docusaurus/debug/metadata', '49d'),
>>>>>>> ad8d42b1e68ec155e502d499dc804a7f20fc67d8
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
<<<<<<< HEAD
    component: ComponentCreator('/__docusaurus/debug/registry', '072'),
=======
    component: ComponentCreator('/__docusaurus/debug/registry', '4b4'),
>>>>>>> ad8d42b1e68ec155e502d499dc804a7f20fc67d8
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
<<<<<<< HEAD
    component: ComponentCreator('/__docusaurus/debug/routes', '3bb'),
=======
    component: ComponentCreator('/__docusaurus/debug/routes', 'b3d'),
>>>>>>> ad8d42b1e68ec155e502d499dc804a7f20fc67d8
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'f5a'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'ac3'),
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
