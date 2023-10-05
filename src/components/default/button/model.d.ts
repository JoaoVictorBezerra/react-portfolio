import { ComponentPropsWithoutRef } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: ButtonVariants;
}

type ButtonVariants = "outlined" | "experience";

// type ButtonTypes = ButtonProps & {
//   children: React.ReactNode;
// };
