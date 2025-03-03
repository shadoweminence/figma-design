import React from "react";

import { IoSearch } from "react-icons/io5";

import companyLogo from "../../../assets/logotype.png";
import "../../../css/Header/laptop/nav.css";

function Navbar() {
  return (
    <nav className="headNav">
      <div className="logo">
        <img src={companyLogo} alt="logo" />
      </div>

      <div className="search-containers">
        <IoSearch className="search-icon" />
        <input type="text" placeholder="Search by product or SKU" />
      </div>

      <div>
        <button className="quickOrder">Quick Order Form</button>
      </div>
    </nav>
  );
}

export default Navbar;
