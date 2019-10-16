import React from "react";
import Lorem from "./Lorem";
import BoxWithScrolling from "./BoxWithScrolling";
import BoxWithScrollingUsingHOC from "./BoxWithScrollingUsingHOC";

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <h2>Start scrolling to see some magic happen!</h2>

      <BoxWithScrollingUsingHOC />
      <BoxWithScrolling position="right" />

      {new Array(30).fill(0).map((_, index) => (
        <Lorem key={index} />
      ))}
    </div>
  );
}

export default App;
