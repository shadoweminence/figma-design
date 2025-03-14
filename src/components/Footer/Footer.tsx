import React from "react";

import Logos from "./Logos";
import "../../css/Footer/footer.css";

import NewsLetter from "./NewsLetter";

import Utils from "./Utils";

const Footer = () => {
  return (
    <div className="allFoot">
      <div className="signDrop">
        <div className="sign">
          <NewsLetter />
        </div>

        <div className="drop">
          <Utils />
        </div>
      </div>

      <div className="logo">
        <Logos />
      </div>
    </div>
  );
};

export default Footer;
