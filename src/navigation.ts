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
          text: 'Drainage',
          href: getPermalink('/services/drainage'),
        },
        {
          text: 'Driveways',
          href: getPermalink('/services/driveways'),
        },
        {
          text: 'Excavation',
          href: getPermalink('/services/excavation'),
        },
        {
          text: 'Landscaping',
          href: getPermalink('/services/landscaping'),
        },
        {
          text: 'Sod Installation',
          href: getPermalink('/services/sod-installation'),
        },
        {
          text: 'Trenching',
          href: getPermalink('/services/trenching'),
        },
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
  actions: [{ text: 'Contact Us', href: '/contact', variant: 'primary' }],
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
        { text: 'Facebook', href: 'https://www.facebook.com/LegacyExteriorsIncWindsor' },
        { text: 'Instagram', href: 'https://www.instagram.com/legacy_exteriors_inc' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/LegacyExteriorsIncWindsor' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/legacy_exteriors_inc' },
  ],
};
