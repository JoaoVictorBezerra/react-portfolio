export function Title({ props }: TitleProps) {
	const title = props?.split('.');
	return (
		<h3 className="text-3xl"><span className="text-primary text-sm">{title[0]}.</span>{title[1]}</h3>
	);
}