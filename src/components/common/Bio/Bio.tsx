import React from "react";
import Image from "next/image";

import styles from "./Bio.module.scss";

function Bio() {
  const author = "";
  const social = { twitter: "" };

  return (
    <div
      style={{
        display: `flex`,
        marginBottom: "10px",
      }}
    >
      <Image src="" alt={author} className={styles.image} />
      <p>
        Written by <strong>{author}</strong>
        {` `}
        <a href={`https://twitter.com/${social.twitter}`}>
          You should follow him on Twitter
        </a>
      </p>
    </div>
  );
}

export default Bio;
