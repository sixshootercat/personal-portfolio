import { FooterNavItem, NavItem } from './navigation.types';

export const NAV_ITEMS: NavItem[] = [
  { id: 1, name: 'Contact', link: '/contact' },
  { id: 2, name: 'Projects', link: '/projects' },
  { id: 3, name: 'Experience', link: '/experience' },
  { id: 4, name: 'Technologies', link: '/technologies' },
];

export const FOOTER_NAV_ITEMS: FooterNavItem[] = [
  { column: 'about me', id: 1, name: 'Contact', link: '/contact' },
  { column: 'portfolio', id: 2, name: 'Projects', link: '/projects' },
  { column: 'portfolio', id: 3, name: 'Experience', link: '/experience' },
  { column: 'portfolio', id: 4, name: 'Technologies', link: '/technologies' },
];
