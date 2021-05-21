import React from "react";
import Box from "./Box";

const Section = ({ hero, children, ...rest }) => {
  return (
    <Box pt={["50px", null, "75px", "100px"]} {...rest}>
      {hero && <Box mt={["40px", null, "50px", "60px"]}></Box>}
      {children}
    </Box>
  );
};

export default Section;
