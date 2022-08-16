import { FooterNavItem, NavItem } from './navigation.types';

export const NAV_ITEMS: NavItem[] = [
  { id: 1, name: 'About', link: '/about' },
  { id: 2, name: 'Contact', link: '/contact' },
  { id: 3, name: 'Projects', link: '/projects' },
  { id: 4, name: 'Experiences', link: '/experiences' },
  { id: 5, name: 'Testimonials', link: '/testimonials' },
];

export const FOOTER_NAV_ITEMS: FooterNavItem[] = [
  { column: 'about me', id: 1, name: 'About', link: '/about' },
  { column: 'about me', id: 2, name: 'Contact', link: '/contact' },
  { column: 'portfolio', id: 3, name: 'Projects', link: '/projects' },
  { column: 'portfolio', id: 4, name: 'Experiences', link: '/experiences' },
  { column: 'portfolio', id: 5, name: 'Testimonials', link: '/testimonials' },
];
