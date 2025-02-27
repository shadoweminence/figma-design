import React, { useEffect, useState } from "react";

import Mobile from "./Mobile/Mobile";

import Laptop from "./Laptop/Laptop";

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isLaptop, setIsLaptop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleWindowResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setIsLaptop(width >= 1024);
    };
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowWidth]);
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
