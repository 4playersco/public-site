import React from "react";
import NextImage from "next/image";
import { gql } from "@apollo/client";

import styles from "../assets/styles/pages/indexPage.module.scss";
import Layout from "../components/layout/Layout";
// import Image from '../components/image';
import logo from "../../public/images/logo-lg.png";
import SEO from "../components/common/Seo";
import Intro from "../components/common/Intro";
import LatestEvents from "../components/common/LatestEvents";
import Buckets from "../components/common/Buckets";
import Gallery from "../components/common/Gallery";
// import LatestNews from '../components/common/LatestNews';
import { fullSiteTitle } from "../constants";

import { getGallery } from "~/lib";
import { getClient } from "~/lib/apollo-ssr-client";

const query = gql`
  query {
    banner(id: "g1z5VoiKyDY2cHi65rZLD") {
      title
      subtitle
      content
    }
  }
`;

const IndexPage = async () => {
  const galleryImages = await getGallery();
  const client = getClient();
  const { data } = await client.query({ query });

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Intro>
        <p>
          <NextImage
            className={styles.logo}
            src={logo}
            alt={`${fullSiteTitle} logo`}
            height="144"
            width="144"
          />
          {data.banner.content}
        </p>
      </Intro>
      <Gallery images={galleryImages} />
      <Buckets />
      <LatestEvents />
      {/* <LatestNews /> */}
    </Layout>
  );
};

export default IndexPage;
