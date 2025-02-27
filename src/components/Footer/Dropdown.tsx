import React, { useEffect, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import "../../css/Footer/dropdown.css";

const Dropdown = () => {
  const [isHowToBuyDropped, setIsHowToBuyDropped] = useState(false);
  const [isHelpDropped, setIsHelpDropped] = useState(false);
  const [isServicesDropped, setIsServicesDropped] = useState(false);
  const [isAboutDropped, setIsAboutDropped] = useState(false);
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

  const handleHowToBuyDrop = () => {
    setIsHowToBuyDropped(!isHowToBuyDropped);
  };

  const handleHelpDrop = () => {
    setIsHelpDropped(!isHelpDropped);
  };

  const handleServicesDrop = () => {
    setIsServicesDropped(!isServicesDropped);
  };

  const handleAboutDrop = () => {
    setIsAboutDropped(!isAboutDropped);
  };

  return (
    <>
      {isLaptop ? (
        <div className="lapDrops">
          <div className="drops">
            <h4>How to buy</h4>
            <div className="items">
              <ul>
                <li>Payment methods</li>
                <li>Order and pick up</li>
                <li>Order with delivery</li>
                <li>Shopping over the phone</li>
                <li>Returns</li>
              </ul>
            </div>
          </div>

          <div className="drops">
            <h4>Help</h4>
            <div className="items">
              <ul>
                <li>Contact</li>
                <li>Online Help</li>
                <li>Our Commitments</li>
                <li>Give feedback</li>
              </ul>
            </div>
          </div>

          <div className="drops">
            <h4>Services</h4>
            <div className="items">
              <ul>
                <li>Transport</li>
                <li>Design service</li>
                <li>Paint an plaster mixing sevice</li>
                <li>Dimensioning and assembly service</li>
                <li>Return of used equipment</li>
                <li>Additional services</li>
              </ul>
            </div>
          </div>

          <div className="drops">
            <h4>About</h4>
            <div className="items">
              <ul>
                <li>About Us</li>
                <li>Press Office</li>
                <li>For suppliers</li>
                <li>Regulations</li>
                <li>Privacy Policy</li>
                <li>Cookies</li>
                <li>Personal Data Request</li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="dropdown">
          <div className="sameBorder">
            <div className="drop" onClick={handleHowToBuyDrop}>
              <h4 className={isHowToBuyDropped ? "active" : ""}> How to buy</h4>
              {isHowToBuyDropped ? <FaAngleUp /> : <FaAngleDown />}
            </div>

            {isHowToBuyDropped && (
              <div className="items">
                <ul>
                  <li>Payment methods</li>
                  <li>Order and pick up</li>
                  <li>Order with delivery</li>
                  <li>Shopping over the phone</li>
                  <li>Returns</li>
                </ul>
              </div>
            )}
          </div>

          <div className="sameBorder">
            <div className="drop" onClick={handleHelpDrop}>
              <h4 className={isHelpDropped ? "active" : ""}>Help</h4>
              {isHelpDropped ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {isHelpDropped && (
              <div className="items">
                <ul>
                  <li>Contact</li>
                  <li>Online Help</li>
                  <li>Our Commitments</li>
                  <li>Give feedback</li>
                </ul>
              </div>
            )}
          </div>

          <div className="sameBorder">
            <div className="drop" onClick={handleServicesDrop}>
              <h4 className={isServicesDropped ? "active" : ""}>Services</h4>
              {isServicesDropped ? <FaAngleUp /> : <FaAngleDown />}
            </div>

            {isServicesDropped && (
              <div className="items">
                <ul>
                  <li>Transport</li>
                  <li>Design service</li>
                  <li>Paint an plaster mixing sevice</li>
                  <li>Dimensioning and assembly service</li>
                  <li>Return of used equipment</li>
                  <li>Additional services</li>
                </ul>
              </div>
            )}
          </div>

          <div className="sameBorder">
            <div className="drop" onClick={handleAboutDrop}>
              <h4 className={isAboutDropped ? "active" : ""}>About</h4>
              {isAboutDropped ? <FaAngleUp /> : <FaAngleDown />}
            </div>

            {isAboutDropped && (
              <div className="items">
                <ul>
                  <li>About Us</li>
                  <li>Press Office</li>
                  <li>For suppliers</li>
                  <li>Regulations</li>
                  <li>Privacy Policy</li>
                  <li>Cookies</li>
                  <li>Personal Data Request</li>
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
