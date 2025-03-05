import React from "react";
import { FiArrowRight } from "react-icons/fi";

import "../../css/showall.css";

export default function ShowAllEvents() {
  return (
    <div className="container">
      <div className="recommend">
        <p>Show all events </p>
        <FiArrowRight className="moreArrow" />
      </div>
      <div></div>
    </div>
  );
}
