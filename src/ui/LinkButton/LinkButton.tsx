import React from "react";
import styles from "./LinkButton.module.scss";

interface LinkButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  icon?: string;
}

const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
  (
    {
      className = "",
      variant = "default",
      size = "default",
      icon,
      children,
      ...props
    },
    ref,
  ) => (
    <a
      className={`${styles["link-button"]} ${styles[variant]} ${styles[size]} ${className}`}
      ref={ref}
      {...props}
    >
      {children && <span className={styles["button-text"]}>{children}</span>}
      {icon && <img src={icon} alt="Link icon" />}
    </a>
  ),
);
LinkButton.displayName = "LinkButton";

export default LinkButton;
