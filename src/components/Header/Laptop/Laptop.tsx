import React from "react";
import Navbar from "./Nav";
import OptionList from "./OptionList";
import Icons from "./Icons";
import "../../../css/Header/laptop/options.css";

const Laptop = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="bigGrid">
        <OptionList />
        <Icons />
      </div>
    </div>
  );
};

export default Laptop;
