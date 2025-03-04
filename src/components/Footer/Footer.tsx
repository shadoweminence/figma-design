import React from "react";

import Logos from "./Logos";
import "../../css/Footer/footer.css";

import NewsLetter from "./NewsLetter";
import Services from "./Services";

const Footer = () => {
  return (
    <div>
      <div className="signDrop">
        <div className="sign">
          <NewsLetter />
        </div>

        <div className="drop">
          <Services />
        </div>
      </div>

      <div>
        <div className="logo">
          <Logos />
        </div>
      </div>
    </div>
  );
};

export default Footer;
