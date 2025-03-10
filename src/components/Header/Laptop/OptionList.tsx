import React from "react";
import Options from "./Options";
import useScreenSize from "../../hooks/useScreenSize";
import Hamburger from "../Mobile/Hamburger";

const OptionList: React.FC = () => {
  const isLaptop = useScreenSize();
  const navs = [
    {
      title: "Home & Garden",
      options: [
        "home",
        "garden",
        "Motor parts",
        "other parts",
        "Motor parts",
        "other parts",
        "Motor parts",
        "other parts",
      ],
    },
    {
      title: "Motors",
      options: ["Motor parts", "other parts"],
    },
    {
      title: "Electronics",
    },
    {
      title: "Office Equipment",
    },
  ];

  return (
    <div>
      {isLaptop ? (
        <div className="navTitles">
          {navs.map((nav, index) => (
            <Options key={index} nav={nav} />
          ))}
        </div>
      ) : (
        <Hamburger navs={navs} />
      )}
    </div>
  );
};

export default OptionList;
