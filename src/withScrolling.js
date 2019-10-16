import React from "react";
import Scrolling from "./Scrolling";

export const withScrolling = Component => props => {
  return (
    <Scrolling render={scroll => <Component {...props} scroll={scroll} />} />
  );
};

export default withScrolling;
