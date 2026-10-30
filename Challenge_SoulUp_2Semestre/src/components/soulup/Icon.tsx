import type { CSSProperties } from "react";
import { ICONS, type IconName } from "./icons";

interface IconProps {
  name: IconName;
  className?: string;
  style?: CSSProperties;
}

export default function Icon({ name, className, style }: IconProps) {
  const body = ICONS[name];
  if (!body) return null;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`inline-block h-[1.1em] w-[1.1em] shrink-0 align-[-0.18em]${
        className ? ` ${className}` : ""
      }`}
      style={style}
      dangerouslySetInnerHTML={{ __html: body }}
    />
  );
}
