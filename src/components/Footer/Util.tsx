import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import "../../css/Footer/utils.css";
import useScreenSize from "../hooks/useScreenSize";

interface Item {
  title: string;
  options: string[];
}

interface ItemProps {
  item: Item;
}

const Util: React.FC<ItemProps> = ({ item }) => {
  const [isDropped, setIsDropped] = useState(false);
  const isLaptop = useScreenSize();

  const handleDrop = () => {
    setIsDropped(!isDropped);
  };

  return (
    <>
      {isLaptop ? (
        <div>
          <div className="drops">
            <h4>{item.title}</h4>
            <div className="items">
              <ul>
                {item.options.map((option, index) => (
                  <li key={index}>{option}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="dropdown">
          <div className="sameBorder">
            <div className="drop" onClick={handleDrop}>
              <h4 className={isDropped ? "active" : ""}> {item.title}</h4>
              {isDropped ? <FaAngleUp /> : <FaAngleDown />}
            </div>

            {isDropped && (
              <div className="items">
                <ul>
                  {item.options.map((option, index) => (
                    <li key={index}>{option}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Util;
