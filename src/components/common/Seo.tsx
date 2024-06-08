"use client";
import React, { FC } from "react";
import Helmet from "react-helmet";

import { fullSiteTitle, siteDescription } from "../../constants";

type SEOProps = {
  description?: string;
  keywords?: string[];
  lang?: string;
  meta?: [];
  title?: string;
};

const SEO: FC<SEOProps> = ({
  description,
  lang = "en",
  meta = [],
  keywords = [],
  title,
}) => {
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${fullSiteTitle}`}
      meta={[
        {
          name: `description`,
          content: siteDescription || description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: siteDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : []
        )
        .concat(meta)}
    />
  );
};

export default SEO;
