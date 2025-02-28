import React from "react";
import fan from "../../assets/fan.png";
import bulb from "../../assets/bulb.png";
import solar from "../../assets/solar.png";

import phone from "../../assets/phone.png";
import "../../css/Categories/categories.css";
import RecommendedCategories from "./RecommendedCategories";
import ShowAllCategories from "./ShowAllCategories";

const Categories: React.FC = () => {
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
    <div>
      <div>
        <div className="align">
          <h2>Recommended Categories</h2>
          <div className="showBig">
            <ShowAllCategories />
          </div>
        </div>
        <div className="grid">
          {categories.map((category, index) => (
            <RecommendedCategories key={index} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
