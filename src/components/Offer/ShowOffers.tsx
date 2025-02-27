import React from "react";
import "../../css/offers.css";

interface Offer {
  image: string;
  alt: string;
  discount: number;
  name: string;
}

interface OfferProps {
  offer: Offer;
}

const ShowOffers: React.FC<OfferProps> = ({ offer }) => {
  return (
    <div className="container1">
      <div className="offerImg">
        <img src={offer.image} alt={offer.alt} />
      </div>

      <div className="discount">
        <p> -{offer.discount}% </p>
      </div>

      <div className="offerName">{offer.name}</div>
      <div>
        <button className="offerBtn">Check Offer</button>
      </div>
    </div>
  );
};

export default ShowOffers;
