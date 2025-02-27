import React, { useState } from "react";
import "../../../css/Header/laptop/options.css";
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
      {nav.options ? (
        <div>
          <div className="navDrop" onClick={handleDrop}>
            <h4 className={isDropped ? "active" : ""}> {nav.title}</h4>
            {isDropped ? <FaAngleUp /> : <FaAngleDown />}
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
        <div className="navTitles">
          <div>{nav.title}</div>
        </div>
      )}
    </div>
  );
};

export default Options;
