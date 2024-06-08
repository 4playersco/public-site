import React from "react";

import Layout from "~/components/layout/Layout";
import SEO from "~/components/common/Seo";
import Main from "~/components/layout/Main";

const LegalPage = () => (
  <Layout>
    <SEO title="Legal" />

    <Main>
      <h1>Legal Stuff</h1>
      <h3>Copyright Notice</h3>
      <p>
        Content and images © 2013-{new Date().getFullYear()} 4-Players of
        Colorado. <em>All Rights Reserved. </em>By entering this site and/or
        viewing any portion of this web site, you agree to abide by the terms of
        this Copyright Notice.
      </p>
      <h3>Privacy Policy</h3>
      <p>
        You may be asked to provide personal information about you, such as your
        name and contact methods, in various places on our website. This privacy
        policy describes how we collect and use your personal information. We
        will never rent, sell, share or otherwise disclose your personal
        information to third parties. We may contact you regarding your
        purchases or promotional announcements that you might find useful. You
        may also opt out from receiving information from us at any time and ask
        us to remove your contact information from our database.
      </p>
      <h3>Disclaimers</h3>
      <p>
        All the information on this website is published in good faith and for
        general information purpose only. We do not make any warranties about
        the completeness, reliability and accuracy of this information. Any
        action you take upon the information on our website is strictly at your
        own risk, and we will not be liable for any losses and damages in
        connection with the use of our website.
      </p>
      <p>
        From this website, you can visit other websites by following hyperlinks
        to these sites. While we strive to provide only links to useful and
        ethical websites, we have no control over the content and nature of
        these sites and the links to other websites do not imply a
        recommendation for all the content found on these sites. Please be also
        aware that when you leave our website, other sites may have different
        privacy policies and terms which are beyond our control.
      </p>
      <h3>Terms of Use</h3>
      <p>
        If you continue to browse and use this website you are agreeing to
        comply with and be bound by the following terms and conditions of use,
        which together with our privacy policy govern 4-Players of Colorado’s
        relationship with you in relation to this website. The term ‘COMPANY’ or
        ‘us’ or ‘we’ refers to the owner of the website. The term ‘you’ refers
        to the user or viewer of our website. The use of this website is subject
        to the following terms of use:
      </p>
      <ul>
        <li>
          The content of the pages of this website is for your general
          information and use only. It is subject to change without notice.
        </li>
        <li>
          Neither we nor any third parties provide any warranty or guarantee as
          to the accuracy, timeliness, performance, completeness or suitability
          of the information and materials found or offered on this website for
          any particular purpose. You acknowledge that such information and
          materials may contain inaccuracies or errors and we expressly exclude
          liability for any such inaccuracies or errors to the fullest extent
          permitted by law.
        </li>
        <li>
          Your use of any information or materials on this website is entirely
          at your own risk, for which we shall not be liable. It shall be your
          own responsibility to ensure that any products, services or
          information available through this website meet your specific
          requirements.
        </li>
        <li>
          This website contains material which is owned by or licensed to us.
          This material includes, but is not limited to, the design, layout,
          look, appearance and graphics. Reproduction is prohibited other than
          in accordance with the copyright notice, which forms part of these
          terms and conditions.
        </li>
        <li>
          All trade marks reproduced in this website which are not the property
          of, or licensed to, the operator are acknowledged on the website.
        </li>
        <li>
          Unauthorized use of this website may give rise to a claim for damages
          and/or be a criminal offense.
        </li>
        <li>
          This website includes links to other websites. These links are
          provided for your convenience to provide further information. They do
          not signify that we endorse the website(s). We have no responsibility
          for the content of the linked website(s).
        </li>
        <li>
          Your use of this website and any dispute arising out of such use of
          the website is subject to the laws of the United States of America and
          the State of Colorado.
        </li>
      </ul>
    </Main>
  </Layout>
);

export default LegalPage;
