import React from "react";

import Mobile from "./Mobile/Mobile";

import Laptop from "./Laptop/Laptop";
import useScreenSize from "../hooks/useScreenSize";

const Header = () => {
  const isLaptop = useScreenSize();
  return (
    <>
      {isLaptop ? (
        <div>
          <Laptop />
        </div>
      ) : (
        <div>
          <Mobile />
        </div>
      )}
    </>
  );
};

export default Header;
