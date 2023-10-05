interface NavbarListProps {
  name: string;
  href: string;
  handleClick: (event: MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}
