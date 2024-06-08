import React, { FC, ReactNode } from "react";

import styles from "./Intro.module.scss";
import Container from "../../utility/Container";

type IntroProps = {
  children: ReactNode;
};

const Intro: FC<IntroProps> = ({ children }) => (
  <div className={styles.Intro}>
    <Container small={true}>{children}</Container>
  </div>
);

export default Intro;
