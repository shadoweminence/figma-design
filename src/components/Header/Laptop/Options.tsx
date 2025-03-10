import React, { useState } from "react";
import "../../../css/Header/laptop/nav.css";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

interface NavOption {
  title: string;
  options?: string[];
}
interface NavOptionProps {
  nav: NavOption;
}

const Options: React.FC<NavOptionProps> = ({ nav }) => {
  const [isDropped, setIsDropped] = useState(false);

  const handleDrop = () => {
    setIsDropped(!isDropped);
  };
  return (
    <div>
      <div>
        {nav.options ? (
          <div>
            <div className="navDrop" onClick={handleDrop}>
              <h4
                className={isDropped ? "active serviceTitle" : "serviceTitle"}
              >
                {" "}
                {nav.title}
              </h4>
              {isDropped ? (
                <FaAngleUp className="optionsDrop" />
              ) : (
                <FaAngleDown className="optionsDrop" />
              )}
            </div>

            {isDropped && (
              <div className="navOptionsDropdown">
                <ul>
                  {nav.options.map((option, index) => (
                    <li key={index}>{option}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ) : (
          <div className="navTitles serviceTitle">
            <div>{nav.title}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Options;
