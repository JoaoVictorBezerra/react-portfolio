import { NavbarMobileListProps } from "./model";

export function NavbarList({ navIcon: Icon, item, href }: NavbarMobileListProps) {
  return (
    <div className="flex items-center gap-3">
      <li className="text-2xl">
        <a href={href}>
          {item}
        </a>
      </li>
      <Icon />
    </div>
  );
}
