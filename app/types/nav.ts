export interface NavItem {
  to: string;
  title: string;
}

export interface MainNavItem extends NavItem {}
export interface MobileNavItem extends Omit<NavItem, "to"> {
  items: Array<NavItem>;
}
