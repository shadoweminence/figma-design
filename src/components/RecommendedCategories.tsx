import React from "react";

import "../css/categories.css";

// Define the expected props for the component
interface Category {
  image: string;
  alt?: string;
  name: string; // Product name
}
interface CategoryProps {
  category: Category;
}

// Accept props using the defined interface
const RecommendedCategories: React.FC<CategoryProps> = ({ category }) => {
  return (
    <div>
      <div className="categories">
        <div className="grid">
          <div className="category">
            <img src={category.image} alt={category.alt} />

            <p className="title">{category.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedCategories;
