import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

interface Top {
  title: string;
  dropOptions: string[];
}

interface TopProps {
  top: Top;
}

const Top: React.FC<TopProps> = ({ top }) => {
  const [isDropped, setIsDropped] = useState(false);
  const [selectedOption, setSelectedOption] = useState(top.dropOptions[0]);

  const handleDrop = () => {
    setIsDropped(!isDropped);
  };

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
    setIsDropped(false);
  };
  return (
    <div>
      <div className="navDrop" onClick={handleDrop}>
        <p className={isDropped ? "active" : ""}>
          {top.title}: {selectedOption}
          {isDropped ? <FaAngleUp /> : <FaAngleDown />}{" "}
        </p>
      </div>

      {isDropped && (
        <div>
          {top.dropOptions.map((option, index) => (
            <p key={index} onClick={() => handleSelectOption(option)}>
              {option}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Top;
