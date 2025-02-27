import React from "react";
import Navbar from "./Nav";
import Search from "./Search";
import "../../css/Header/header.css";

const Header = () => {
  return (
    <div>
      <div className="topFirstRow">
        <div>
          <Navbar />
        </div>
        <div>
          <Search />
        </div>
        <div className="quickOrderButton">
          <button>Quick Order Form</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
