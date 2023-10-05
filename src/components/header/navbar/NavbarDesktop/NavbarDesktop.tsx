import { NavbarConstants } from "../../../../constants";
import NavbarList from "./NavbarList/NavbarList";

export function NavbarDesktop() {

  function handleScroll(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();

    const { href } = event.currentTarget;

    const targetId = href.replace(/.*#/, "");
    const element = document.getElementById(targetId);

    element?.scrollIntoView({ behavior: "smooth" });

    const links = document.querySelectorAll(".nav-link");

    links.forEach((link) => {
      link.classList.add("border-transparent");
      link.classList.remove("text-primary");
    });

    event.currentTarget.classList.remove("border-transparent");
    event.currentTarget.classList.add("text-primary");
    event.currentTarget.classList.add("border-primary");
  }
  return (
    <div className="navbar-blur shadow-navbar-shadow fixed left-6 right-6 top-6 z-50 mx-auto w-[calc(460px+2rem)] bg-background/50 rounded-xl">
      <nav className="hidden container mx-auto py-4 max-w-content md:inline-flex items-center justify-center">
        <ul className="flex justify-center items-center gap-2 text-sm tracking-label">
          {NavbarConstants.map((page, index) => <NavbarList key={`data-${index}`} href={page.href} name={page.name} handleClick={handleScroll} />)}
        </ul>
      </nav>
    </div>
  );
}
