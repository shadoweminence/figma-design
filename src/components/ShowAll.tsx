import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import "../css/showall.css";

export default function ShowAll() {
  return (
    <div className="container">
      <div className="recommend">
        <p>Show all recommended products </p>
        <FaArrowRight />
      </div>
      <div>
        <FaChevronRight className="icons" />
      </div>
    </div>
  );
}
