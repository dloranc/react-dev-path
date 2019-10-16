import React from "react";
import classNames from "classnames";
import './Box.css';

export const Box = props => {
  const {
    position = "left",
    scroll: { x, y }
  } = props;

  const classes = classNames({
    box: true,
    "box--right": position === "right",
    "box--left": position === "left"
  });

  return (
    <div className={classes}>
      ScrollY: {y}
      <br />
      ScrollX: {x}
    </div>
  );
};

export default Box;
