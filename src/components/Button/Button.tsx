"use client";

import Link from "next/link";
import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  target?: "_blank" | "_self";
  ariaLabel?: string;
  className?: string;
  variant?: "default" | "outline";
  rounded?: boolean;
};

export const Button = ({
  children,
  href,
  onClick,
  type = "button",
  target,
  ariaLabel,
  className,
  variant = "default",
  rounded = false,
}: ButtonProps) => {
  const variantClass = variant === "outline" ? styles.outline : "";
  const roundedClass = rounded ? styles.rounded : "";
  const combinedClassName =
    `${styles.button} ${variantClass} ${roundedClass} ${className || ""}`.trim();

  // Si href est fourni, on rend un Link
  if (href) {
    const isExternal = target === "_blank";

    return (
      <Link
        href={href}
        className={combinedClassName}
        target={target}
        rel={isExternal ? "noopener noreferrer" : undefined}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    );
  }

  // Sinon, on rend un button
  return (
    <button type={type} onClick={onClick} className={combinedClassName} aria-label={ariaLabel}>
      {children}
    </button>
  );
};
