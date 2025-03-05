import React from "react";
import { FiArrowRight } from "react-icons/fi";

import "../../css/showall.css";

export default function ShowAllCategories() {
  return (
    <div className="container">
      <div className="recommend">
        <p>Show all categories </p>
        <FiArrowRight className="moreArrow" />
      </div>
      <div></div>
    </div>
  );
}
