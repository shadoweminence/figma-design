import React from "react";
import Options from "./Options";

const OptionList: React.FC = () => {
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
      <div>
        <div className="navTitles">
          {navs.map((nav, index) => (
            <Options key={index} nav={nav} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OptionList;
