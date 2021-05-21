import React from "react";
import { Helmet } from "react-helmet";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/grid-2/Hero";
import Works from "../sections/grid-2/Works";

const About = () => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Payle | The Digital Agency | About</title>
        <description>About Page</description>
      </Helmet>
      <PageWrapper>
        <Hero />
        <Works />
      </PageWrapper>
    </>
  );
};
export default About;
  