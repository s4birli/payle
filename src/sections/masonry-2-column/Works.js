import React, { useState, useEffect } from "react";
import { Container, Col } from "react-bootstrap";
import Masonry from "react-masonry-component";

import { Section, Text } from "../../components/Core";

const Works = ({data}) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(data);
  }, []);
  
  const masonryOptions = {
    transitionDuration: 1000,
  };

  return (
    <>
      {/* <!-- Works Area --> */}
      <Section className="position-relative">
        <Container>
          <Masonry
            options={masonryOptions}
            className={"masonry-grid row"} // default ''
          >
            {items.map((item, index) => (
              <Col lg="6" md="6" sm="12" key={index} className="filtr-item">
                <Text
                  variant="lg"
                  className="text-center"
                  mb={3}
                  color="heading"
                >
                  {item.title}
                </Text>
              </Col>
            ))}
          </Masonry>
        </Container>
      </Section>
    </>
  );
};

export default Works;
