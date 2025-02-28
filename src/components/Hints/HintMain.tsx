import React from "react";
import Hints from "./Hints";
import ShowAllHints from "./ShowAllHints";
import "../../css/flex.css";

const HintMain = () => {
  return (
    <div>
      <Hints />
      <div className="showSmall">
        <ShowAllHints />
      </div>
    </div>
  );
};

export default HintMain;
