import React from "react";
import ad1 from "../../assets/ad1.png";
import ad2 from "../../assets/ad2.png";
import ad3 from "../../assets/ad3.png";
import "../../css/categories.css";

import Adss from "../Adss";
const Ad: React.FC = () => {
  const ads = [
    {
      image: ad1,
      name: "New tool kits!",
    },
    {
      image: ad2,
      name: "New tool kits!",
    },
    {
      image: ad3,
      name: "New tool kits!",
    },
  ];

  return (
    <div>
      <div className="ad">
        <div>
          {ads.map((ad, index) => (
            <Adss key={index} ad={ad} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ad;
