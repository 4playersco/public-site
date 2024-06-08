import React from "react";
import Link from "next/link";
import NextImage from "next/image";
import { gql } from "@apollo/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import Layout from "~/components/layout/Layout";
import SEO from "~/components/common/Seo";
import Main from "~/components/layout/Main";
import { getClient } from "~/lib/apollo-ssr-client";

const query = gql`
  query {
    page(id: "10ZL2u0Ul2JghMr0Aienys") {
      title
      content {
        json
      }
    }
  }
`;

const RunInfoPage = async () => {
  const client = getClient();
  const { data } = await client.query({ query });

  return (
    <Layout showSmallHeader={true} pageTitle={data.page.title}>
      <SEO title="Run Information" />

      <Main>
        {documentToReactComponents(data.page.content.json)}
        {/* <h2>General Run Information</h2>
      <p>
        Here&apos;s a description of a typical day run with the 4-Players: You
        sign-up to attend a Run on our website. Our Run Leader(s) prepare for
        the run and meet you at the rally point at the designated time. Once
        everyone has assembled, the Run Leader goes through the scenario for the
        day, including trail needs and driving challenges. We head to the
        trailhead as a group, and then have loads of fun driving through and
        exploring the area. We typically take several short breaks along the
        way, and often eat lunch at a picturesque location near the trail. Once
        the trail is done, everyone regroups and decides if there are
        after-the-trail food or sundries, or perhaps a different way back to the
        city. Take look below at what our Run Leaders and you do while on the
        trails with us.
      </p>
      <h3>Run Leaders</h3>
      <p>
        Run Leaders are assigned to each of our runs. They are responsible for
        planning and leading the run for those who&apos;ve signed up.
        Here&apos;s a quick list of their duties.
      </p>
      <div className="columns">
        <div className="col1">
          <h4>Run Prep</h4>
          <ul>
            <li>Determine the day, meet-up location and time of the Run.</li>
            <li>Provide Run Info to Webmaster for posting on this website.</li>
            <li>Gather and study trail maps.</li>
            <li>Contact the local Ranger for current trail conditions.</li>
            <li>
              Study the area, history, obstacles, points of interests and
              determine side trips.
            </li>
            <li>Talk to other past Run Leaders about the trail.</li>
            <li>
              Download the list of attendees from this website using the Run
              Leader tool.
            </li>
            <li>Evaluate the expected weather for the day of the run.</li>
          </ul>
        </div>
        <div className="col2">
          <h4>On the Run</h4>
          <ul>
            <li>
              Check-in attendees and guests, get rig count, and do
              introductions.
            </li>
            <li>Note any special needs by any of the attendees.</li>
            <li>Outline the path, stops, obstacles and the lunch spot.</li>
            <li>Discuss all obstacles and rig limitations of the trail.</li>
            <li>Manage trail safety and rig assistance.</li>
            <li>
              Ensure that the Run Leader and the last rig have working radios.
            </li>
            <li>Manage breakdowns or emergencies.</li>
            <li>
              No one is ever left behind or alone. <strong>Ever</strong>.
            </li>
            <li>Submit Run Report and photos using website tools.</li>
          </ul>
        </div>
      </div>
      <h3>Attendees</h3>
      <p>
        Runs are intended to take you to amazing spots in our area, challenge
        your driving skills, and provide some outdoor off-road fun. As a run
        attendee, you have responsibilities to the Run Leader and other
        attendees. Here&apos;s a quick list of your duties.
      </p>
      <div className="columns">
        <div className="col1">
          <h4>On the Run</h4>
          <ul>
            <li>Ensure your rig is properly maintained before embarking.</li>
            <li>Carry food, water, and extra warm clothing.</li>
            <li>
              Plan for emergencies by having an emergency or repair kit on the
              trail.
            </li>
            <li>Carry a radio for communication.</li>
            <li>
              Follow the leader: stay a close but safe distance from the rig in
              front of you.
            </li>
            <li>
              Monitor the rig behind you. Slow down or stop if they fall out of
              your view. At hard turns, ensure the rig behind you follows the
              turn off.
            </li>
            <li>Study the trail ahead of time.</li>
            <li>Assist with breakdowns or emergencies.</li>
            <li>Assist with obstacles or trail conditions.</li>
          </ul>
        </div>
        <div className="col2">
          <h4>Equipment</h4>
          <p>
            <strong>Radios</strong>: We use two-way radios like the{" "}
            <a
              target="_blank"
              href="https://midlandusa.com/product/gxt1000vp4/"
              rel="noopener noreferrer"
            >
              Midland GXT100VP4
            </a>{" "}
            or equivalent. We monitor channel 22 on the trail. (Very few members
            have CBs in their rigs, but that number is increasing.)
          </p>
          <p>
            <strong>Repair Kit</strong>: Know what tools you&apos;ll need for
            your rig to do basic trail repairs if you breakdown or get damaged.
            It takes time to build up these kits. Think ahead how you can fix a
            flat, tie up a loose/broken part, or ways to limp off the trail to a
            repair shop.
          </p>
          <p>
            <strong>Emergency Kit</strong>: Include things like extra food,
            water, shelter, fire/warmth, maps, etc. It takes time to build up
            these kits. Think ahead how you&apos;ll handle a late-into-the-night
            repair with yet 20 miles of off-road before reaching pavement.
          </p>
        </div>
      </div>
      <h3>Where We Meet Up</h3>
      <p>Each run will designate a meet-up location and time.</p>

      <h3>Want to Come Along?</h3>
      <p>
        <strong>No 4x4 Vehicle?</strong> That&apos;s okay! Our members commonly
        have space for ride-alongs and it&apos;s a great way to be immersed in
        nature and meet some of the guys in the club.{" "}
        <a href="https://members.4-playersofcolorado.org/registration">
          Sign-up for an account
        </a>
        .
      </p>
      <p>
        <strong>Have a Rig?</strong> Let&apos;s go! Our Run Leaders are
        experienced off-roaders. It&apos;s safer to hit the trails with a group.
        Pack a lunch and/or your dog and let&apos;s get out there.{" "}
        <a href="https://members.4-playersofcolorado.org/registration">
          Create an account
        </a>{" "}
        to get started.
      </p> */}

        {/* <hr />

        <p>
          If you have any questions, please feel free to{" "}
          <Link href="/contact">contact us</Link> for more information.
        </p> */}
      </Main>
    </Layout>
  );
};

export default RunInfoPage;
