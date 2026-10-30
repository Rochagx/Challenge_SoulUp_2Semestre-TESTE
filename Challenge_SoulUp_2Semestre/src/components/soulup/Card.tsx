import type { ReactNode } from "react";
import Icon from "./Icon";
import type { IconName } from "./icons";

interface CardProps {
  icon?: IconName;
  iconClassName?: string;
  title?: string;
  animate?: boolean;
  className?: string;
  children: ReactNode;
}

export default function Card({
  icon,
  iconClassName = "bg-gradient-to-br from-teal to-mint",
  title,
  animate = false,
  className = "",
  children,
}: CardProps) {
  return (
    <article
      className={`rounded-md border border-borderc bg-surface p-6 shadow-soft-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-md ${
        animate ? "animate-fadeUp" : ""
      } ${className}`}
    >
      {icon && (
        <div
          className={`mb-4 grid h-12 w-12 place-items-center rounded-sm text-white ${iconClassName}`}
        >
          <Icon name={icon} style={{ width: "28px", height: "28px" }} />
        </div>
      )}
      {title && <h3 className="mb-2">{title}</h3>}
      {children}
    </article>
  );
}
