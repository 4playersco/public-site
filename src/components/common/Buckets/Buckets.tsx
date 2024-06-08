import React from "react";
import { gql } from "@apollo/client";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";

import styles from "./Buckets.module.scss";
import Container from "../../utility/Container";
import { getClient } from "~/lib/apollo-ssr-client";

const query = gql`
  query {
    homeMissionStatement(id: "2CeGklBjbZ3z1kb5iL38NH") {
      title
    }
    missionCollection {
      total
      items {
        sys {
          id
        }
        title
        description {
          json
        }
      }
    }
  }
`;

const Buckets = async () => {
  const client = getClient();
  const { data } = await client.query({ query });

  return (
    <div className={styles.Buckets}>
      <Container>
        <h2>{data.homeMissionStatement.title}</h2>
        <ul className={styles.list}>
          {data.missionCollection.items.map((item: any) => (
            <li key={item.sys.id}>
              <strong>{item.title}</strong>
              <br />
              {documentToPlainTextString(item.description.json)}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default Buckets;
