import React from "react";
import image from "../../assets/image.png";
import ShowOffers from "./ShowOffers";
import "../../css/offers.css";

const Offers: React.FC = () => {
  const offers = [
    {
      image: image,
      alt: "power tool",
      discount: 20,
      name: "on power tools",
    },
  ];

  return (
    <div>
      <div className="product">
        <div className="grids">
          {offers.map((offer, index) => (
            <ShowOffers key={index} offer={offer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;
