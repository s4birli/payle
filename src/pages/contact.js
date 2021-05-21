import React from "react";
import { Helmet } from "react-helmet";
import PageWrapper from "../components/PageWrapper";
import { Box } from "../components/Core";
import Contact from "../sections/others/Contact";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Payle | The Digital Agency | Contact</title>
        <description>Contact Page</description>
      </Helmet>
      <PageWrapper>
        <Box pt={4}>
          <Contact />
        </Box>
      </PageWrapper>
    </>
  );
};

export default ContactPage;
