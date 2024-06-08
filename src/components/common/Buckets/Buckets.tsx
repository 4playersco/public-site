import React, { FC } from "react";
// import { gql } from "@apollo/client";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";

import styles from "./Buckets.module.scss";
import Container from "../../utility/Container";
// import { getClient } from "~/lib/apollo-ssr-client";
// import { BuildInvalidedProject } from "typescript";

// const query = gql`
//   query {
//     homeMissionStatement(id: "2CeGklBjbZ3z1kb5iL38NH") {
//       title
//     }
//     missionCollection {
//       total
//       items {
//         sys {
//           id
//         }
//         title
//         description {
//           json
//         }
//       }
//     }
//   }
// `;

type Mission = {
  sys: {
    id: string;
  };
  title: string;
  description: {
    json: any;
  };
};

type BucketsProps = {
  title: string;
  missions: Mission[];
};

const Buckets: FC<BucketsProps> = ({ title, missions }) => {
  return (
    <div className={styles.Buckets}>
      <Container>
        <h2>{title}</h2>
        <ul className={styles.list}>
          {missions.map((item: any) => (
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
