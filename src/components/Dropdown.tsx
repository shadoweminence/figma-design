import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import "../css/dropdown.css";

const Dropdown = () => {
  const [isDropped, setIsDropped] = useState(false);

  const handleDrop = () => {
    setIsDropped(!isDropped);
  };
  return (
    <div className="dropdown">
      <div className="sameBorder">
        <div className="drop" onClick={handleDrop}>
          <h4 className={isDropped ? "active" : ""}> How to buy</h4>
          {isDropped ? <FaAngleUp /> : <FaAngleDown />}
        </div>

        {isDropped && (
          <div className="buyItems">
            <p>Payment methods</p>
            <p>Order and pick up</p>
            <p>Order with delivery</p>
            <p>Shopping over the phone</p>
            <p>Returns</p>
          </div>
        )}
      </div>

      <div className="sameBorder">
        <div className="drop">
          <h4>Help</h4>
          <FaAngleDown />
        </div>
      </div>

      <div className="sameBorder">
        <div className="drop">
          <h4>Services</h4>
          <FaAngleDown />
        </div>
      </div>

      <div className="sameBorder">
        <div className="drop">
          <h4>About</h4>
          <FaAngleDown />
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
