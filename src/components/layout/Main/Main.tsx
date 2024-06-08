import React, { FC, ReactNode } from "react";

import styles from "./Main.module.scss";
import Container from "../../utility/Container";

type MainProps = {
  children: ReactNode;
};

const Main: FC<MainProps> = ({ children }) => (
  <main className={styles.Main}>
    <Container small={true}>{children}</Container>
  </main>
);

export default Main;
