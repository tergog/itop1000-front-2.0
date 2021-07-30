export interface INavigationParameters {
  view: string;
  links: INavigationLinks[];
}

export interface INavigationLinks {
  text: string;
  href: string;
  role?: string;
  icon: string;
}
