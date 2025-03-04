import React from "react";
import fan from "../../assets/fan.png";
import bulb from "../../assets/bulb.png";
import solar from "../../assets/solar.png";

import phone from "../../assets/phone.png";
import "../../css/Categories/categories.css";

import ShowAllCategories from "./ShowAllCategories";
import Category from "./Category";
import useScreenSize from "../hooks/useScreenSize";

const Categories: React.FC = () => {
  const isLaptop = useScreenSize();
  const categories = [
    {
      image: solar,
      alt: "Solar panel",
      name: "Photovoltaics",
    },
    {
      image: phone,
      alt: "Mobile phone",
      name: "Electronics",
    },
    {
      image: bulb,
      alt: "Bulb",
      name: "Light Sources",
    },
    {
      image: fan,
      alt: "Ventilator",
      name: "Ventilation and Heating",
    },
  ];

  return (
    <div className="rec">
      {isLaptop ? (
        <>
          <div className="categoryAlign">
            <h2>Recommended Categories</h2>
            <div className="showBig">
              <ShowAllCategories />
            </div>
          </div>
          <div className="grid">
            {categories.map((category, index) => (
              <Category key={index} category={category} />
            ))}
          </div>
        </>
      ) : (
        <>
          <h2>Recommended Categories</h2>
          <div className="showBig">
            <ShowAllCategories />
          </div>

          <div className="grid">
            {categories.map((category, index) => (
              <Category key={index} category={category} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Categories;
