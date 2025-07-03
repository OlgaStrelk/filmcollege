import React, { type ComponentType } from "react";
import styles from "./LinkButton.module.scss";
import { Link } from "react-router-dom";

interface LinkButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "default" | "outline" | "ghost" | "simple";
  size?: "default" | "sm" | "lg" | "icon";
  icon?: ComponentType<{ className?: string }>;
}

const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
  (
    {
      className = "",
      variant = "default",
      size = "default",
      icon: Icon,
      children,
      href = "/",
      ...props
    },
    ref,
  ) => (
    <Link
      to={href}
      className={`${styles["link-button"]} ${styles[variant]} ${styles[size]} ${className}`}
      ref={ref}
      {...props}
    >
      {children && <span className={styles["button-text"]}>{children}</span>}
      {Icon && <Icon className="link-button-icon" />}
    </Link>
  ),
);
LinkButton.displayName = "LinkButton";

export default LinkButton;
