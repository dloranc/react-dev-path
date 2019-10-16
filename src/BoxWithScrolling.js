import React from "react";
import Scrolling from "./Scrolling";
import Box from "./Box";

export const BoxWithScrolling = props => {
  return <Scrolling render={scroll => <Box {...props} scroll={scroll} />} />;
};

export default BoxWithScrolling;
