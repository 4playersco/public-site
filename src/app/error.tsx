"use client";
import React from "react";

import Layout from "../components/layout/Layout";
import SEO from "../components/common/Seo";
import Container from "../components/utility/Container";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <Container small={true}>
      <h1>NOT FOUND</h1>
      <p>You just tried a page that doesn&#39;t exist... the sadness.</p>
    </Container>
  </Layout>
);

export default NotFoundPage;
