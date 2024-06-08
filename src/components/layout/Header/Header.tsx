"use client";
import React, { FC } from "react";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { gql } from "@apollo/client";

import styles from "./Header.module.scss";
import Menu from "../Menu";
import Container from "../../utility/Container";
import Button from "../../utility/Button";

const query = gql`
  query {
    banner(id: "g1z5VoiKyDY2cHi65rZLD") {
      title
      subtitle
    }
  }
`;

type HeaderProps = {
  pageTitle?: string;
  siteTitle?: string;
  small?: boolean;
};

type BannerData = {
  data: {
    banner: {
      title: string;
      subtitle: string;
    };
  };
};

const Header: FC<HeaderProps> = ({
  pageTitle = "",
  siteTitle = "",
  small = false,
}) => {
  const { data }: BannerData = useSuspenseQuery(query);

  return (
    <header
      className={small ? `${styles.header} ${styles.small}` : styles.header}
    >
      <Container>
        <Menu siteTitle={siteTitle} />
        {small ? (
          <div className={styles.hero}>
            <h1 className={styles.pageTitle}>{pageTitle}</h1>
          </div>
        ) : (
          <div className={styles.hero}>
            <h2 className={styles.tagline}>{data.banner.title}</h2>
            <h3 className={styles.sinceline}>{data.banner.subtitle}</h3>
            <Button href="/membership">Get Started</Button>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;
