import { NavbarMobileListProps } from "./model";

export function NavbarList({ navIcon: Icon, item, href }: NavbarMobileListProps) {
  return (
    <div className="flex flex-col items-center">
      <Icon className="text-text-secondary" />
      <li className="text-primary text-sm tracking-wide">
        <a href={href}>
          {item}
        </a>
      </li>
    </div>
  );
}
