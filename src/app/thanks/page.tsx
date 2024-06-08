import React from "react";

import Layout from "~/components/layout/Layout";
import SEO from "~/components/common/Seo";
import Main from "~/components/layout/Main";

const ThanksPage = () => (
  <Layout showSmallHeader={true} pageTitle="Thank You">
    <SEO title="Thank you for your message" />

    <Main>
      <h2>Thanks For Your Message</h2>
      Someone will get back to you shortly.
    </Main>
  </Layout>
);

export default ThanksPage;
