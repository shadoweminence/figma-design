import React from "react";
import SignUpForm from "./SignUpForm";

import Logos from "./Logos";
import "../../css/Footer/footer.css";
import DropdownItems from "./DropdownItems";

const Footer = () => {
  return (
    <div>
      <div className="signDrop">
        <div className="sign">
          <SignUpForm />
        </div>

        <div className="drop">
          <DropdownItems />
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
