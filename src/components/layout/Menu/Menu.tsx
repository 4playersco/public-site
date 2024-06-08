"use client";
import React, { FC, useState, useCallback } from "react";
import Link from "next/link";
import cn from "classnames";

import styles from "./Menu.module.scss";

type MenuProps = {
  siteTitle?: string;
};

const Menu: FC<MenuProps> = ({ siteTitle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>();

  const handleMenuClick = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  const menuStyles = cn(styles.mobileList, {
    [styles.active]: isMenuOpen,
  });

  const mobileTitleStyles = cn(styles.mobileTitle, styles.listHeading);

  return (
    <nav className={styles.Menu}>
      <ul className={styles.list}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/run-info">Run Info</Link>
        </li>
        <li className="list-item--title">
          <h1 className={styles.listHeading}>
            <Link href="/">
              <span className={styles.listBigNumber}>4</span>-Players
            </Link>
          </h1>
        </li>
        <li>
          <Link href="/membership">Membership</Link>
        </li>
        <li>
          <a href="https://members.4-playersofcolorado.org">Login</a>
        </li>
        <li>
          <Link href="/contact">Contact Us</Link>
        </li>
      </ul>

      <div className={styles.mobileMenu}>
        <h1 className={mobileTitleStyles}>
          <Link href="/">
            <span className={styles.listBigNumber}>4</span>-Players
          </Link>
        </h1>
        <button className={styles.mobileMenuButton} onClick={handleMenuClick}>
          Menu
        </button>
      </div>
      <ul className={menuStyles}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/run-info">Run Info</Link>
        </li>
        <li>
          <Link href="/membership">Membership</Link>
        </li>
        <li>
          <a href="https://members.4-playersofcolorado.org">Login</a>
        </li>
        <li>
          <Link href="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
