import React, { FC, ReactNode } from "react";
import classnames from "classnames";

import styles from "./Container.module.scss";

type ContainerProps = {
  className?: string;
  small?: boolean;
  children: ReactNode;
};

const Container: FC<ContainerProps> = ({
  small = false,
  children,
  className = "",
}) => {
  const classes = classnames({
    [styles.containerSmall]: small,
    [styles.container]: !small,
    [className]: true,
  });

  return <div className={classes}>{children}</div>;
};

export default Container;
