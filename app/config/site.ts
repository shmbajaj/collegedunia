import { Icons } from '~/components/icons';

export const siteConfig = {
  name: 'Educom Guidance',
  year: 2023,
  poweredBy: {
    name: 'Bajaj Technologies',
    link: '/',
  },
  links: [
    { to: '/educom-fb', title: 'Facebook', Icon: Icons.Facebook },
    {
      to: '/educom-ig',
      title: 'Instagram',
      Icon: Icons.Instagram,
    },
  ],
  style: {
    primaryColor: '#00ADE6',
  },
};
export type SiteConfig = typeof siteConfig;
