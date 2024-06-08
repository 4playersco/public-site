import React from "react";
import Image from "next/image";

import styles from "~/assets/styles/pages/contactPage.module.scss";
import Layout from "~/components/layout/Layout";
import Main from "~/components/layout/Main";
import SEO from "~/components/common/Seo";
import ContactForm from "~/components/common/ContactForm";
import walkieImg from "~/assets/images/walkie.jpg";

const ContactPage = () => (
  <Layout showSmallHeader={true} pageTitle="Contact Us">
    <SEO title="Contact" />

    <Main>
      <h2>Send Us a Message</h2>
      <p>
        Our monthly meetings are at 7pm on the second Monday of each month at{" "}
        <a
          href="https://www.google.com/maps/dir//Charlie's+Denver,+900+E+Colfax+Ave,+Denver,+CO+80218/@39.7397694,-104.978392,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x876c792d2c23dbc9:0xb4e1b42dcd87972!2m2!1d-104.9762311!2d39.739667"
          target="_blank"
          rel="noreferrer"
        >
          Charlie&apos;s Denver
        </a>{" "}
        (seasonally, see calendar for details)
      </p>
      <div className={styles.cols}>
        <ContactForm />
        <Image className={styles.walkieImg} src={walkieImg} alt="Contact us" />
      </div>
    </Main>
  </Layout>
);

export default ContactPage;
