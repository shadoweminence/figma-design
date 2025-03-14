import React, { useEffect, useRef, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import "../../../css/Header/laptop/nav.css";

interface Top {
  title: string;
  dropOptions: string[];
}

interface TopProps {
  top: Top;
}

const Top: React.FC<TopProps> = ({ top }) => {
  const toggleRef = useRef<HTMLDivElement>(null);
  const [isDropped, setIsDropped] = useState(false);
  const [selectedOption, setSelectedOption] = useState(top.dropOptions[0]);

  const handleDrop = () => {
    setIsDropped(!isDropped);
  };

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
    setIsDropped(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        toggleRef.current &&
        !toggleRef.current?.contains(event.target as Node)
      ) {

        setIsDropped(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  return (
    <div ref={toggleRef}>
      <div className="navDrop" onClick={handleDrop}>
        <div className={isDropped ? "active country" : "country"}>
          {top.title}: {selectedOption}
          {isDropped ? (
            <FaAngleUp className="countryAngle" />
          ) : (
            <FaAngleDown className="countryAngle" />
          )}{" "}
        </div>
      </div>

      {isDropped && (
        <div className="navDropdown">
          <ul>
            {top.dropOptions.map((option, index) => (
              <li key={index} onClick={() => handleSelectOption(option)}>
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Top;
