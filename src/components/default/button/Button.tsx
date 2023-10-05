import { twMerge } from "tailwind-merge";
import { ButtonProps } from "./model";


export function Button({ variant = "outlined", ...props }: ButtonProps) {
  const selectedVariant = {
    outlined: "tracking-label text-primary border border-primary hover:bg-background-opacity",
    experience: "tracking-label text-primary hover:bg-background-opacity"
  };
  const _class = twMerge(selectedVariant[variant], "text-sm px-[10px] py-[5px] rounded-sm duration-500 mt-2");
  return (
    <button className={_class} {...props}>
      {props.children}
    </button>
  );
}
