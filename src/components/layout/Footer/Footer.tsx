import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./Footer.module.scss";
import Container from "../../utility/Container";
import Button from "../../utility/Button";
import logoSrc from "../../../../public/images/icon.png";

type FooterProps = {
  siteTitle?: string;
};

const Footer: FC<FooterProps> = ({ siteTitle = "" }) => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.pageCap}>
        <Button href="/membership">Get Started</Button>
      </div>
      <Container className={styles.info}>
        <Link href="/">
          <Image
            className={styles.logo}
            src={logoSrc}
            alt={`${siteTitle} logo`}
          />
        </Link>
        <br />© {new Date().getFullYear()} {siteTitle}
        <br />
        All Rights Reserved
      </Container>
    </footer>
  );
};

export default Footer;
