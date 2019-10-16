import { useState, useLayoutEffect } from "react";

export const Scrolling = props => {
  const [x, setX] = useState(window.scrollX);
  const [y, setY] = useState(window.scrollY);
  const eventHandler = () => {
    setX(window.scrollX);
    setY(window.scrollY);
  };

  useLayoutEffect(() => {
    window.addEventListener("scroll", eventHandler);

    return () => {
      window.removeEventListener("scroll", eventHandler);
    };
  }, []);

  return props.render({
    x,
    y
  });
};

export default Scrolling;
