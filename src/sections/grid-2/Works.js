import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Masonry from "react-masonry-component";

import {
  Title,
  Section,
  Box,
  Text,
  ButtonOutline,
  ListNav,
} from "../../components/Core";
import RotateImg from "../../components/RotateImg";
import { aboutData } from "../../data";
import { useWindowSize } from "../../hooks";
import { breakpoints } from "../../utils";

const WorkCard = styled(Box)``;
const WorkText = styled(Box)``;

const Grid = (props) => {
  const size = useWindowSize();

  const masonryOptions = {
    transitionDuration: 1000,
  };

  return size.width < breakpoints.lg ? (
    <Masonry
      options={masonryOptions}
      className={"masonry-grid row"}
      {...props}
    />
  ) : (
    <Row {...props} />
  );
};

const Works = () => {
  const [items, setItems] = useState([]);
  const [activeLink, setActiveLink] = useState("development");

  useEffect(() => {
    filterBy("development");
  }, []);

  const filterBy = (cat) => {
    const filteredItems = aboutData.filter((item) => {
      return item.categories.indexOf(cat) !== -1;
    });
    setActiveLink(cat);
    setItems(filteredItems);
  };

  return (
    <>
      {/* <!-- Works Area --> */}
      <Section className="position-relative">
        <Container>
          <Box
            mb="2.5rem"
            ml="-1.75rem"
            className="d-flex justify-content-center"
          >
            <ListNav className="nav">
              <li className="nav-item">
                <a
                  className={`nav-link font-weight-bold text-uppercase ${
                    activeLink === "development" ? "active" : null
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    filterBy("development");
                  }}
                >
                  Development & Ecommerce
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link font-weight-bold text-uppercase ${
                    activeLink === "marketing" ? "active" : null
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    filterBy("marketing");
                  }}
                >
                  Marketing
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link font-weight-bold text-uppercase ${
                    activeLink === "feeds-tagging" ? "active" : null
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    filterBy("feeds-tagging");
                  }}
                >
                  Data & Analytics
                </a>
              </li>
            </ListNav>
          </Box>
        </Container>
        <Container>
          <Grid>
            {items.map((item, index) => (
              <Col lg="4" md="6" key={index} className="filtr-item">
                <WorkCard className="position-relative" mb="30px">
                  <Box pb="2.125rem">
                    <WorkText className="overflow-hidden text-center">
                      <Title variant="cardLg">
                        <Link to={item.link}>{item.brand} </Link>
                      </Title>
                    </WorkText>
                  </Box>
                  <RotateImg
                    link={item.link}
                    imgSrc={item.thumbnail}
                  />
                </WorkCard>
              </Col>
            ))}
          </Grid>
        </Container>
      </Section>
    </>
  );
};

export default Works;
