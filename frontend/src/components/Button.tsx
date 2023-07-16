import { ReactNode } from "react";
import { tv } from "tailwind-variants";

const Button = ({
  text,
  color,
  icon,
  size,
  full,
  onClick,
}: {
  text: string;
  color: "primary" | "secondary";
  size: "xs" | "sm" | "md" | "lg";
  icon: ReactNode;
  onClick?: () => void;
  full?: boolean;
}) => {
  const button = tv({
    base: `rounded-full px-3 py-2 flex flex-row gap-2 justify-center items-center ${
      full ? "w-full" : ""
    }`,
    variants: {
      color: {
        primary:
          "bg-custom-dark-orange border border-custom-dark-orange text-white",
        secondary:
          "bg-white border-custom-dark-orange border text-custom-dark-orange",
      },
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
        xs: "text-xs",
      },
    },
  });
  return (
    <button onClick={onClick} className={button({ color, size })}>
      {icon && <div>{icon}</div>}
      <div>{text}</div>
    </button>
  );
};

export default Button;
