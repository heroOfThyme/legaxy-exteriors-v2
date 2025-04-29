import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Services',
      href: getPermalink('/services'),
      links: [
        {
          text: 'Excavation',
          href: getPermalink('/services/excavation'),
        },
        {
          text: 'Trenching',
          href: getPermalink('/services/trenching'),
        },
        {
          text: 'Drainage',
          href: getPermalink('/services/drainage'),
        },
        {
          text: 'Landscaping',
          href: getPermalink('/services/landscaping'),
        },
        {
          text: 'Driveways',
          href: getPermalink('/services/driveways'),
        },
        {
          text: 'Sod Installation',
          href: getPermalink('/services/sod'),
        }
      ],
    },
    {
      text: 'Our Work',
      href: getPermalink('/our-work'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Lets Get Started', href: '/contact', variant: 'primary' }],
};

export const footerData = {
  links: [
    {
      title: 'Site Links',
      links: [
        { text: 'Home', href: getPermalink('/') },
        { text: 'About', href: getPermalink('/about') },
        { text: 'Services', href: getPermalink('/services') },
        { text: 'Our Work', href: getPermalink('/work') },
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Terms', href: getPermalink('/terms') },
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
      ],
    },
    {
      title: 'Follow Us',
      links: [
        { text: 'Instagram', href: '#' },
        { text: 'Facebook', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/legacy_exteriors_inc' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/LegacyExteriorsIncWindsor' },
  ],
  footNote: `
    Made by <a class="text-[#7776ff] underline" href="https://rvbcorp.com/"> RVB Data Sciences Corp.</a> · All rights reserved.
  `,
};
