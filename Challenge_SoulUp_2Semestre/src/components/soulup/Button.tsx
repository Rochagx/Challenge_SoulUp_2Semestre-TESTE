import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "@tanstack/react-router";

type Variant = "primary" | "secondary";

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  variant?: Variant;
  block?: boolean;
  className?: string;
  to?: string;
  children: ReactNode;
}

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-sm px-[1.6rem] py-[0.85rem] font-body text-[0.95rem] font-semibold transition-all duration-200 cursor-pointer no-underline";

const VARIANTES: Record<Variant, string> = {
  primary:
    "bg-teal text-white shadow-soft-sm hover:-translate-y-0.5 hover:bg-teal-dark hover:shadow-soft-md",
  secondary:
    "border-2 border-deep bg-transparent text-deep hover:bg-deep hover:text-white",
};

export default function Button({
  variant = "primary",
  block = false,
  className = "",
  to,
  children,
  ...rest
}: ButtonProps) {
  const classes = `${BASE} ${VARIANTES[variant]} ${block ? "w-full" : ""} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}
