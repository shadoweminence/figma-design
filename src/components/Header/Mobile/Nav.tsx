import React from "react";

import { MdOutlineShoppingCart } from "react-icons/md";
import "../../../css/Header/mobile/nav.css";
import companyLogo from "../../../assets/logotype.png";

const Navbar = () => {
  return (
    <nav>
      {/* Centered Logo */}
      <div className="mobNavLogo">
        <img src={companyLogo} alt="logo" />
      </div>

      {/* Right Section */}
      <div className="nav-right">
        <div className="cart">
          <MdOutlineShoppingCart />
          <span className="badge">45</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
