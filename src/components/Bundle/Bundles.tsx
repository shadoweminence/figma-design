import React from "react";
import bundle from "../../assets/bundle.png";

import Bundle from "./Bundle";
const Bundles: React.FC = () => {
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
      <div>
        <div>
          {bundles.map((bundle, index) => (
            <Bundle key={index} bundle={bundle} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bundles;
