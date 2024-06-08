import React, { FC, ReactNode, HTMLAttributes } from "react";
import classnames from "classnames";

import styles from "./Button.module.scss";

interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  className?: string;
  ghost?: boolean;
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  [x: string]: any;
}

const Button: FC<ButtonProps> = ({
  onClick,
  children,
  ghost,
  className,
  href,
  ...rest
}) => {
  const classes = classnames(className, {
    [styles.Button]: !ghost,
    [styles.ButtonGhost]: ghost,
  });

  const btnComponent = href ? (
    <a href={href} className={classes}>
      {children}
    </a>
  ) : (
    <button onClick={onClick} className={classes} {...rest}>
      {children}
    </button>
  );

  return btnComponent;
};

export default Button;
