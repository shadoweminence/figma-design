import React, { useEffect, useRef, useState } from "react";
import "../../../css/Header/laptop/nav.css";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { makeUpperCase } from "../../../Utils/HelperFucntion";
// import { removeWhiteSpace } from "../../../Utils/HelperFucntion";

interface NavOption {
  title: string;
  options?: string[];
}
interface NavOptionProps {
  nav: NavOption;
}

const Options: React.FC<NavOptionProps> = ({ nav }) => {
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

  // const handleRedirect =(title:string)=>{
  //   const properTitle = removeWhiteSpace(title);
  //   navigate("../")
  // }
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
                  <li key={index}>{option}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : (
        <div className="navTitles serviceTitle">
          <div>{properTitle}</div>
        </div>
      )}
    </div>
  );
};

export default Options;
