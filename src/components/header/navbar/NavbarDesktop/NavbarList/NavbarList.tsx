export default function NavbarList({ name, href, handleClick }: NavbarListProps) {
	return (
		<a className="nav-link border-b-2 border-solid border-transparent hover:border-primary transition-all duration-300" onClick={handleClick} href={href} >
			<li className="hover:text-primary transition-all duration-300">{name}</li>
		</a>
	);
}
