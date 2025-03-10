import React from "react";

import Top from "./Top";

const TopItems: React.FC = () => {
  const tops = [
    {
      title: "Country",
      dropOptions: ["Sweden", "America"],
    },
    {
      title: "Language",
      dropOptions: ["Svenska", " English"],
    },
    {
      title: "Currency",
      dropOptions: ["$", "Rs."],
    },
  ];

  return (
    <div>
      <div className="navTitless">
        {tops.map((top, index) => (
          <Top key={index} top={top} />
        ))}
      </div>
    </div>
  );
};

export default TopItems;
