import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { Section, Box, Text } from "../../components/Core";
import bgHeroPattern from "../../assets/image/webp/hero-pattern.webp";

const SectionStyled = styled(Section)`
  &::before {
    position: absolute;
    top: 0;
    content: "";
    width: 100%;
    height: 20%;
    background: url(${bgHeroPattern}) top center no-repeat;
    background-size: cover;
    z-index: -1;
  }
`;

const Introduce = (props) => {
  const {title, subtitle} = props;
  return (
    <>
      <SectionStyled className="position-relative">
        <Container>
          <Box
            className="d-flex flex-column align-items-center text-center border-bottom border-dark"
            pt={3}
          >
            <Text
              variant="lg"
              className="font-weight-bold"
              mb={3}
              color="heading"
            >
              {title}
            </Text>

            <Text
              variant="lg"
              mb={3}
              color="heading"
              className="font-italic"
            >
              {subtitle}
            </Text>
          </Box>
        </Container>
      </SectionStyled>
    </>
  );
};

export default Introduce;
