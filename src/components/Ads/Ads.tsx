import React from "react";
import ad1 from "../../assets/ad1.png";
import ad2 from "../../assets/ad2.png";
import ad3 from "../../assets/ad3.png";
import "../../css/ads.css";

import Ad from "./Ad";
const Ads: React.FC = () => {
  const ads = [
    {
      image: ad1,
      name: "New tool kits!",
    },
    {
      image: ad2,
      name: "New rules for wind farms!",
    },
    {
      image: ad3,
      name: "New iPhone now available!",
    },
    {
      image: ad1,
      name: "New tool kits!",
    },
    {
      image: ad2,
      name: "New rules for wind farms!",
    },
    {
      image: ad3,
      name: "New iPhone now available!",
    },
    {
      image: ad1,
      name: "New tool kits!",
    },
    {
      image: ad2,
      name: "New rules for wind farms!",
    },
    {
      image: ad3,
      name: "New iPhone now available!",
    },
    {
      image: ad1,
      name: "New tool kits!",
    },
    {
      image: ad2,
      name: "New rules for wind farms!",
    },
    {
      image: ad3,
      name: "New iPhone now available!",
    },
    {
      image: ad1,
      name: "New tool kits!",
    },
    {
      image: ad2,
      name: "New rules for wind farms!",
    },
    {
      image: ad3,
      name: "New iPhone now available!",
    },
    {
      image: ad1,
      name: "New tool kits!",
    },
    {
      image: ad2,
      name: "New rules for wind farms!",
    },
    {
      image: ad3,
      name: "New iPhone now available!",
    },
  ];

  return (
    <div>
      <div>
        <div className="ad">
          {ads.map((ad, index) => (
            <Ad key={index} ad={ad} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ads;
