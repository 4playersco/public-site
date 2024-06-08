import React from "react";

import Layout from "~/components/layout/Layout";
import SEO from "~/components/common/Seo";
import Main from "~/components/layout/Main";

const NewsPage = () => (
  <Layout showSmallHeader={true} pageTitle="News">
    <SEO title="News" />

    <Main>
      <h2>What&apos;s Happening?</h2>
      Articles coming soon&hellip;
    </Main>
  </Layout>
);

export default NewsPage;
