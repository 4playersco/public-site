import React, { FC } from "react";
// import classnames from 'classnames';

import styles from "./LatestNews.module.scss";
import Container from "../../utility/Container";
import Button from "../../utility/Button";

type LatestNewsProps = {
  small?: string;
  children: JSX.Element;
};

const LatestNews: FC<LatestNewsProps> = () => {
  return (
    <div className={styles.LatestNews}>
      <Container>
        <ul className={styles.list}>
          <li>Article 1</li>
          <li>Article 2</li>
          <li>Article 3</li>
        </ul>

        <Button onClick={() => {}}>See all news</Button>
      </Container>
    </div>
  );
};

export default LatestNews;
