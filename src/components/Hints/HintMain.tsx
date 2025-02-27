import React from "react";
import Hints from "./Hints";
import ShowAllHints from "./ShowAllHints";
// import "../../css/flex.css";

const HintMain = () => {
  return (
    <div className="flex">
      <Hints />
      <ShowAllHints />
    </div>
  );
};

export default HintMain;
