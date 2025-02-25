import React from "react";
import "../css/bundles.css";

interface Bundle {
  image?: string;
  alt?: string;
  description?: string;
  description1?: string;
}

interface BundleProps {
  bundle: Bundle;
}

const BuyBundle: React.FC<BundleProps> = ({ bundle }) => {
  return (
    <div className="bundles">
      <div className="bundleImg">
        <img src={bundle.image} alt={bundle.alt} />
      </div>

      <div className="bundleDetails">
        <div className="bundleDescription">
          <h2> {bundle.description}</h2>
        </div>
        <div className="bundleDescription1">{bundle.description1}</div>
        <div>
          <button className="buyBundle">Buy this bundle</button>
        </div>
      </div>
    </div>
  );
};

export default BuyBundle;
