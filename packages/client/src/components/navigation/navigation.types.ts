export type NavItem = {
  name: string;
  link: string;
  id: number;
};

type ColumnTitle = 'about me' | 'portfolio';

export type FooterNavItem = NavItem & {
  column: ColumnTitle;
};
