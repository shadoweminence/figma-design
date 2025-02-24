import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineShoppingCart } from "react-icons/md";
import "../css/nav.css";
import companyLogo from "../assets/logotype.png";

function Navbar() {
  return (
    <nav>
      <div className="nav-left">
        <div className="ham">
          <RxHamburgerMenu />
        </div>
      </div>

      {/* Centered logo */}
      <div className="logo">
        <img src={companyLogo} alt="logo" />
      </div>

      {/* Right section with cart */}
      <div className="nav-right">
        <div className="cart">
          <MdOutlineShoppingCart />
          <span className="badge">45</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
