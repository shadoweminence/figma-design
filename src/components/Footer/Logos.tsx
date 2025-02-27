import React from "react";
import { FaYoutube } from "react-icons/fa";
import { BiLogoFacebook, BiLogoInstagram } from "react-icons/bi";
import logo from "../../assets/logotype.png";
import "../../css/Footer/logos.css";

const Logos = () => {
  return (
    <div className="foot">
      <div className="social">
        <BiLogoFacebook className="fb" />

        <BiLogoInstagram className="insta" />

        <FaYoutube className="yt" />
      </div>

      <div className="logo1">
        <img src={logo} alt="" />
      </div>

      <div className="copyright">&#169; 2021 Divante S.A.</div>
    </div>
  );
};

export default Logos;
