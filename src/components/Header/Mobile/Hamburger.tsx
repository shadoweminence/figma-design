import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineShoppingCart } from "react-icons/md";
import "../../../css/Header/mobile/nav.css";
import companyLogo from "../../../assets/logotype.png";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface NavOption {
  title: string;
  options?: string[];
}

interface HamburgerProps {
  navs: NavOption[]; // Accepts an array now
}

const Hamburger: React.FC<HamburgerProps> = ({ navs }) => {
  const [isHamDropped, setIsHamDropped] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleTitleCLick = (title: string) => {
    const trimmedTitle = title.replace(/\s+/g, "");
    console.log({ trimmedTitle });
    navigate(`../../pages/${trimmedTitle}`);
  };
  return (
    <nav>
      {/* Left Section */}
      <div className="nav-left">
        <div className="ham">
          <RxHamburgerMenu onClick={() => setIsHamDropped(!isHamDropped)} />
        </div>

        {isHamDropped && (
          <div className="dropdownNav">
            {navs.map((nav, index) => (
              <div key={index}>
                <div
                  className="dropdown-header"
                  onClick={() =>
                    setOpenDropdown(openDropdown === index ? null : index)
                  }
                >
                  <div className="flexbox">
                    {!nav.options ? (
                      <div
                        onClick={() => {
                          handleTitleCLick(nav.title);
                        }}
                      >
                        {nav.title}
                      </div>
                    ) : (
                      <div>{nav.title}</div>
                    )}

                    {nav.options &&
                      nav.options.length > 0 && // Show arrows only if options exist
                      (openDropdown === index ? (
                        <FaAngleUp className="optionsDrop" />
                      ) : (
                        <FaAngleDown className="optionsDrop" />
                      ))}
                  </div>
                </div>

                {openDropdown === index && nav.options && (
                  <ul className="options-list">
                    {nav.options.map((option, i) => (
                      <li
                        key={i}
                        onClick={() => {
                          handleTitleCLick(option);
                        }}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Centered Logo */}
      <div className="mobNavLogo">
        <img src={companyLogo} alt="logo" />
      </div>

      {/* Right Section */}
      <div className="nav-right">
        <div className="cart">
          <MdOutlineShoppingCart />
          <span className="badge">45</span>
        </div>
      </div>
    </nav>
  );
};

export default Hamburger;
