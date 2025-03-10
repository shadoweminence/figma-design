import React, { useState } from "react";
import "../../../css/Header/laptop/nav.css";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

interface NavOption {
  title: string;
  options?: string;
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
      <div className="navTitles">
        {nav.options ? (
          <div>
            <div className="navDrop" onClick={handleDrop}>
              <h4 className={isDropped ? "active" : ""}> {nav.title}</h4>
              {isDropped ? (
                <FaAngleUp className="optionsDrop" />
              ) : (
                <FaAngleDown className="optionsDrop" />
              )}
            </div>

            {isDropped && (
              <div>
                <p
                  dangerouslySetInnerHTML={{
                    __html: nav.options.replace(/,/g, "<br />"),
                  }}
                />
              </div>
            )}
          </div>
        ) : (
          <div className="navTitles navNoOptions">
            <div>{nav.title}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Options;
