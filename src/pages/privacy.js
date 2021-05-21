import React from "react";
import { Helmet } from "react-helmet";
import { Container, Row, Col } from "react-bootstrap";
import { Section, Title, Text, Box } from "../components/Core";
import PageWrapper from "../components/PageWrapper";
import imgWorkCover from "../assets/image/jpg/details/details-2.jpg";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Payle | The Digital Agency | Privacy</title>
        <description>Privacy Page</description>
      </Helmet>
      <PageWrapper>
        <Section hero>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="8">
                <Box>
                  <Title className="my-4">
                    Privacy Policy
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
                    Privacy Policy
                  </Title>
                </Box>
              </Col>
            </Row>
          </Container>
        </Section>  
      </PageWrapper>
    </>
  );
};
export default Privacy;
