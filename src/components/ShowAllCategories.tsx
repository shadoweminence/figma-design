import React from "react";
import { FaArrowRight } from "react-icons/fa";

import "../css/showall.css";

export default function ShowAllCategories() {
  return (
    <div className="container">
      <div className="recommend">
        <p>Show all categories </p>
        <FaArrowRight />
      </div>
      <div></div>
    </div>
  );
}
