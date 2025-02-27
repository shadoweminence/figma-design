import React, { useEffect, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import "../../css/Footer/dropdown.css";

interface Item {
  title: string;
  options: string;
}

interface ItemProps {
  item: Item;
}

const Dropdown: React.FC<ItemProps> = ({ item }) => {
  const [isDropped, setIsDropped] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isLaptop, setIsLaptop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleWindowResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      setIsLaptop(width >= 1024);
    };
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowWidth]);

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
                <li>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: item.options.replace(/,/g, "<br />"),
                    }}
                  />
                </li>
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
                  <li>
                    {" "}
                    <p
                      dangerouslySetInnerHTML={{
                        __html: item.options.replace(/,/g, "<br />"),
                      }}
                    />
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Dropdown;
