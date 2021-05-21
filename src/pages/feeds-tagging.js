import React from "react";
import { Helmet } from "react-helmet";
import { Container, Row, Col } from "react-bootstrap";
import { Element } from "react-scroll";
import { Section, Title, Text, Box } from "../components/Core";
import PageWrapper from "../components/PageWrapper";
import Works from "../sections/masonry-2-column/Works";
import imgWorkCover from "../assets/image/jpg/details/details-2.jpg";
import imgS1 from "../assets/image/jpg/details/details-12.jpg";
import { feedsTaggingData } from "../data";

const Magento = () => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Payle | The Digital Agency | Feeds & Tagging</title>
        <description>Feeds & Tagging Page</description>
      </Helmet>
      <PageWrapper>
        <Section hero>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="8">
                <Box>
                  <Title className="my-4">
                    Development & Ecommerce
                  </Title>
                  <Text
                    variant="p"
                    css={`
                      max-width: 750px;
                    `}
                  > 
                  </Text>
                </Box>
              </Col>
            </Row>
            <Box pt={["4rem", null, null, "6.25rem"]}>
              <img src={imgWorkCover} alt="" className="img-fluid w-100" />
            </Box>
          </Container>
        </Section>
       
        <Section className="mt-lg-5 pb-0">
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="8">
                <Box>
                  <Title className="my-4">
                    Feeds & Tagging
                  </Title>
                </Box>
              </Col>
            </Row>
            <Row>
              <Col xs="12" className="mb-5">
                <img src={imgS1} alt="" className="img-fluid w-100" />
              </Col>
            </Row>
            <Element name="works">
              <Works data={feedsTaggingData} />
            </Element>
          </Container>
        </Section>  
      </PageWrapper>
    </>
  );
};
export default Magento;
