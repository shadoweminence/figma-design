import React from "react";
import dpd from "../assets/dpd.png";
import "../css/dpd.css";

export default function DPD() {
  return (
    <div className="layout">
      <div className="dpd">
        <h2 className="dpdH2">DPD delivery already available!</h2>

        <p>Choose DPD for speed, ease and convenience.</p>
        <p>
          Track your parcel in real time. This will help you plan your work
          while waiting for the parcel.
        </p>

        <button className="showBtn">Show more</button>
      </div>
      <div className="dpdImg">
        {" "}
        <img src={dpd} alt="dpd" />
      </div>
    </div>
  );
}
