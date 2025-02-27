import React from "react";
import "../../css/ads.css";

interface Ad {
  image?: string;
  alt?: string;
  name?: string;
}

interface AdProps {
  ad: Ad;
}

const Adss: React.FC<AdProps> = ({ ad }) => {
  return (
    <div className="ads">
      <div className="adName">
        <h2> {ad.name}</h2>
      </div>
      <div className="adImg">
        <img src={ad.image} alt={ad.alt} />
      </div>
    </div>
  );
};

export default Adss;
