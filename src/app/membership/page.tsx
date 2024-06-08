import React from "react";
import { gql } from "@apollo/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import styles from "~/assets/styles/pages/membershipPage.module.scss";
import Layout from "~/components/layout/Layout";
import SEO from "~/components/common/Seo";
import Main from "~/components/layout/Main";
import Button from "~/components/utility/Button";
import { getClient } from "~/lib/apollo-ssr-client";

const query = gql`
  query {
    page(id: "5vyAs7bv9vCCytbcIi9xkU") {
      title
      content {
        json
      }
    }
  }
`;

const MembershipPage = async () => {
  const client = getClient();
  const { data } = await client.query({ query });

  return (
    <Layout showSmallHeader={true} pageTitle={data.page.title}>
      <SEO title="Membership Information" />

      <Main>
        {documentToReactComponents(data.page.content.json)}
        {/* <h2>How to Get Involved</h2>
      <p>
        <strong>I have a rig</strong>. Great! Check out the{" "}
        <a href="#full-membership">requirements for Full membership</a> below.
      </p>
      <p>
        <strong>I don&apos;t have a 4WD vehicle</strong>. No problem! We offer
        an Associate membership for those who don&apos;t have access to a 4WD
        vehicle or cannot otherwise meet membership requirements. Read the{" "}
        <a href="#associate-membership">related section</a> below for details.
      </p>
      <p>
        <strong>I&apos;m not sure if I want to join</strong>. Guests are
        welcome! Join us for up to 3 runs before we ask that you apply for
        membership.{" "}
        <a href="https://members.4-playersofcolorado.org/register">
          Create an account
        </a>{" "}
        to get started.
      </p>

      <h3 id="full-membership">Requirements for Full Membership</h3>
      <ul>
        <li>
          Own or have access to a 4×4-capable vehicle with current license,
          registration, and insurance coverage.
        </li>
        <li>Identify as a member of the LGBTQI+ community.</li>
        <li>Have a desire to explore off-road trails.</li>
        <li>Be 18 years of age or older.</li>
      </ul>
      <h4>Process</h4>
      <ol>
        <li>
          <a href="https://members.4-playersofcolorado.org/register">
            Register for an account
          </a>
          .
        </li>
        <li>
          Sign-up and drive your rig on one or more of our published runs.
        </li>
        <li>
          Attend one or more of our monthly meetings, held on the second Monday
          of the month at 7pm.
        </li>
        <li>
          Upon completion of steps 1-3, the General Membership will vote to
          consider your application (you must be present at the meeting).
        </li>
        <li>
          Once the General Membership grants you Full Member status, pay the $40
          yearly dues and submit a &lsquo;Rigbook&rsquo; photo of you and your
          rig.
        </li>
      </ol>
      <p>Note: Steps #2 and #3 can be done in any order.</p>

      <h4>Expectations</h4>
      <ul>
        <li>Participate in all fundraising activities. </li>
        <li>
          Learn from, or provide help to, other members on how to be safe on the
          trails and good stewards of our environment.
        </li>
        <li>Have Fun!</li>
      </ul>

      <h4>Benefits</h4>
      <ul>
        <li>
          Members receive 10-15% off items purchased at 4WD.com and
          4WheelParts.com. The club receives back 3% of all member&apos;s
          purchases during the year.
        </li>
        <li>
          Full access to our website with online roster, galleries, past run
          reports, meeting minutes, and newsletters.
        </li>
        <li>
          Belonging to a club with 35+ years of history, stories and active
          participation in our community.
        </li>
      </ul>

      <h3 id="associate-membership">Requirements for Associate Membership</h3>

      <ul>
        <li>Have a desire to explore off-road trails.</li>
        <li>Be 18 years of age or older.</li>
      </ul>

      <h4>Process</h4>
      <ol>
        <li>
          <a href="https://members.4-playersofcolorado.org/register">
            Register for an account
          </a>
          .
        </li>
        <li>
          Attend one or more of our monthly meetings, held on the second Monday
          of the month at 7pm.
        </li>
        <li>
          Upon completion of the first two steps, the General Membership will
          vote to consider your application (you must be present at the
          meeting).
        </li>
      </ol>

      <h4>Expectations</h4>
      <ul>
        <li>
          Learn from, or provide help to, other members on how to be safe on the
          trails and good stewards of our environment.
        </li>
        <li>Have Fun!</li>
      </ul>

      <h4>Benefits</h4>
      <ul>
        <li>
          Access to our website with galleries, past run reports, and
          newsletters.
        </li>
        <li>
          Belonging to a club with 35+ years of history, stories and active
          participation in our community.
        </li>
          </ul>*/}
      </Main>
    </Layout>
  );
};

export default MembershipPage;
