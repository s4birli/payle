import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { Section, Button, Title, Text, Box } from "../components/Core";
import PageWrapper from "../components/PageWrapper";
import imgWorkCover from "../assets/image/jpg/details/details-2.jpg";
const Work = () => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Payle | The Digital Agency | Work</title>
        <description>Work Page</description>
      </Helmet>
      <PageWrapper>
        <Section hero>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg="8">
                <Box>
                  <Title className="my-4">
                    Work
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
                    Work
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
export default Work;
