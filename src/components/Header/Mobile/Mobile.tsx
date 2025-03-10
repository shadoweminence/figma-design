import React from "react";

import Search from "./Search";

import OptionList from "../Laptop/OptionList";
import "../../../css/Header/mobile/nav.css";

const Mobile = () => {
  return (
    <div>
      <div className="smallGrid">
        <OptionList />
      </div>
      <div>
        <Search />
      </div>
    </div>
  );
};

export default Mobile;
