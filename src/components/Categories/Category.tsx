import React from "react";

import "../../css/Categories/categories.css";

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
const Category: React.FC<CategoryProps> = ({ category }) => {
  return (
    <div>
      <div className="categories">
        <div className="grid">
          <div className="category">
            <div className="categoryImg">
              {" "}
              <img src={category.image} alt={category.alt} />
            </div>

            <p className="title">{category.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
