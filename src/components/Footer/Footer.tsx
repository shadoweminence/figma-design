import React from "react";
import SignUpForm from "./SignUpForm";
import Dropdown from "./Dropdown";
import Logos from "./Logos";
import "../../css/Footer/footer.css";

const Footer = () => {
  return (
    <div>
      <div className="signDrop">
        <div className="sign">
          <SignUpForm />
        </div>

        <div className="drop">
          <Dropdown />
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
