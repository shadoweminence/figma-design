import React from "react";
import { FaArrowRight } from "react-icons/fa";

import "../css/showall.css";

export default function ShowAllHints() {
  return (
    <div className="container">
      <div className="recommend">
        <p>Show all hints </p>
        <FaArrowRight />
      </div>
      <div></div>
    </div>
  );
}
