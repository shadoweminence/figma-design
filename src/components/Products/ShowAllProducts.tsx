import React from "react";
import { FiArrowRight } from "react-icons/fi";

import "../../css/showall.css";

export default function ShowAll() {
  return (
    <div className="container">
      <div className="recommend">
        <p>Show all recommended products </p>
        <FiArrowRight className="moreArrow" />
      </div>
    </div>
  );
}
