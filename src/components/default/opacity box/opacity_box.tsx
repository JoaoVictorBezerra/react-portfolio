import { TechBoxProps } from "./model";

export function OpacityBox({ Icon }: TechBoxProps) {
  return (
    <div className="group/tech bg-black/20 p-3 rounded-md border-2 border-solid border-transparent hover:border-primary duration-500">
      <img className="opacity-80 group-hover/tech:opacity-100 transition-all duration-100 w-[50px] h-[50px]" src={Icon} alt={Icon} />
    </div>
  );
}
