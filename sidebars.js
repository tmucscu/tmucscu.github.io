/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    { type: "doc", id: "intro", label: "Home" },
    {
      type: "category",
      label: "Using TMU CS Facilities",
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "facilities/tmu-cs-setup",
          label: "Setting up your TMU CS Account",
        },
        {
          type: "doc",
          id: "facilities/about-dcs-servers",
          label: "About DCS Servers",
        },
        {
          type: "doc",
          id: "facilities/lab-info",
          label: "Lab Information",
        },
      ],
    },
    { type: "doc", id: "buildings", label: "TMU Buildings 101" },
    {
      type: "doc",
      id: "software",
      label: "Software and Resource Recommendations",
    },
    { type: "doc", id: "tips", label: "University Tips" },
    { type: "doc", id: "discounts", label: "Student Discounts" },
    { type: "doc", id: "faq", label: "Frequently Asked Questions" },
    { type: "doc", id: "contact", label: "Contact Us" },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;
