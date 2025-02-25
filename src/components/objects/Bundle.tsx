import React from "react";
import bundle from "../../assets/bundle.png";

import BuyBundle from "../BuyBundle";
const Bundle: React.FC = () => {
  const bundles = [
    {
      image: bundle,
      description: "Buy this bundle and save $100!",
      description1:
        "Longer sentence, for just two lines and it could be very very long",
    },
  ];

  return (
    <div>
      <div className="bundle">
        <div className="hints">
          {bundles.map((bundle, index) => (
            <BuyBundle key={index} bundle={bundle} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bundle;
