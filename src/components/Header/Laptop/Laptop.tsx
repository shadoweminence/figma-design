import React from "react";

import OptionList from "./OptionList";
import Icons from "./Icons";
import "../../../css/Header/laptop/nav.css";
import TopItems from "./TopItems";
import UserDetails from "./UserDetails";
import MidNav from "./MidNav";

const Laptop = () => {
  return (
    <div>
      <div className="bigGridd">
        <TopItems />
        <UserDetails />
      </div>
      <div>
        <MidNav />
      </div>

      <div className="bigGrid">
        <OptionList />
        <Icons />
      </div>
    </div>
  );
};

export default Laptop;
