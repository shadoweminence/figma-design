import React, { useEffect, useRef, useState } from "react";
import "../../../css/Header/laptop/nav.css";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { makeUpperCase } from "../../../Utils/HelperFucntion";

import { removeWhiteSpace } from "../../../Utils/HelperFucntion";
import { useNavigate } from "react-router-dom";


interface NavOption {
  title: string;
  options?: string[];
}
interface NavOptionProps {
  nav: NavOption;
}

const Options: React.FC<NavOptionProps> = ({ nav }) => {

  const navigate = useNavigate();

  const toggleRef = useRef<HTMLDivElement>(null);
  const [isDropped, setIsDropped] = useState(false);

  const properTitle = makeUpperCase(nav.title);

  const handleDrop = () => {
    setIsDropped(!isDropped);
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

  const handleTitle = (title: string) => {
    const spaceRemovedTitle = removeWhiteSpace(title);
    console.log("jhcabed");
    navigate(`../../pages/${spaceRemovedTitle}`);
  };

  return (
    <div ref={toggleRef}>
      {nav.options ? (
        <div>
          <div className="navDrop" onClick={handleDrop}>
            <h4 className={isDropped ? "active serviceTitle" : "serviceTitle"}>
              {" "}
              {properTitle}
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

                  <li onClick={() => handleTitle(option)} key={index}>
                    {option}
                  </li>

                ))}
              </ul>
            </div>
          )}
        </div>
      ) : (

        <div className="navNoOptions serviceTitle">
          <div onClick={() => handleTitle(nav.title)}>{properTitle}</div>

        </div>
      )}
    </div>
  );
};

export default Options;
