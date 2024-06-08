import React, { FC, ReactNode } from "react";
import { fullSiteTitle } from "../../../constants";

import Header from "../Header";
import Footer from "../Footer";
// import styles from './Layout.module.scss';

type LayoutProps = {
  pageTitle?: string;
  showSmallHeader?: boolean;
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({
  showSmallHeader = false,
  pageTitle = "",
  children,
}) => (
  <>
    <Header
      pageTitle={pageTitle}
      siteTitle={fullSiteTitle}
      small={showSmallHeader}
    />
    {children}
    <Footer siteTitle={fullSiteTitle} />
  </>
);

export default Layout;
