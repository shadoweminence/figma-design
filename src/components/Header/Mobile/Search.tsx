import React from "react";

import { IoSearch } from "react-icons/io5";
import "../../../css/Header/mobile/search.css";

export default function Search() {
  return (
    <div className="search-container">
      <IoSearch className="search-icon" />
      <input type="text" placeholder="Search by product or SKU" />
    </div>
  );
}
