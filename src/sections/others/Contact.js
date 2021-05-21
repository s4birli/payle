import React from "react";
import { rgba } from "polished";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Title, Text, Span, Box } from "../../components/Core";
import imgFacebook from "../../assets/image/png/Facebook.png";
import imgTwitter from "../../assets/image/png/Twitter.png";
import imgLinkedin from "../../assets/image/png/Linkedin.png";
import ContactForm from "../../components/ContactForm";
import { device } from "../../utils";

const ContactCard = styled.div`
  border-radius: 10px;
  background-color: ${({ theme }) => rgba(theme.colors.primary, 0.1)};
  margin-top: 3rem;
  @media ${device.lg} {
    margin-top: 150px;
  }
`;
const SocialImg = styled.img`
  max-width: 40%;
`
const Contact = ({ hero = true, ...rest }) => {
  return (
    <>
      <Section hero={hero} {...rest}>
        <Container>
          <Row className="justify-content-center">
            <Col lg="6">
              <Box className="pr-lg-5">
                <Title variant="secSm" mb="2rem">
                  Contact Payle Today
                </Title>
                <Text mb="2.75rem">
                  Have a project or question? Send us a message.
                </Text>
                <ContactForm />
              </Box>
            </Col>
            <Col lg="5">
              <ContactCard className="p-5 ml-lg-5 d-flex d-flex flex-column align-items-center">
                <div>
                  <Text>Email us at</Text>
                  <a href="mailto:hello@payle.co.uk" className="font-weight-bold">
                    <Span color="primary">hello@payle.co.uk</Span>
                  </a>
                </div>
                <div className="mt-5 d-flex flex-column align-items-center">
                  <Text>Social Media</Text>
                  <div className="mt-3 mb-1 d-flex flex-column align-items-center">
                    <SocialImg src={imgFacebook} alt="Facebook" className="img-social"/>
                  </div>
                  <a href="https://www.facebook.com/payledigital" className="font-weight-bold">
                    <Span color="primary">Facebook - Payle Digital</Span>
                  </a>
                  <div className="mt-4 mb-1 d-flex flex-column align-items-center">
                  <SocialImg src={imgTwitter} alt="Twitter" className="img-fluid" />
                </div>
                  <a href="https://twitter.com/payledigital" className="font-weight-bold">
                    <Span color="primary">Twitter - @payledigital</Span>
                  </a>
                  <div className="mt-4 mb-1 d-flex flex-column align-items-center">
                  <SocialImg src={imgLinkedin} alt="Linkedin" className="img-fluid" />
                </div>
                  <a href="https://linkedin.com/payledigital" className="font-weight-bold">
                    <Span color="primary">Linkedin - Payle Digital</Span>
                  </a>
                </div>
              </ContactCard>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Contact;
