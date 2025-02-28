import React from "react";

import Categories from "./Categories";
import ShowAllCategories from "./ShowAllCategories";
import "../../css/flex.css";

const Category = () => {
  return (
    <div className="catFlex">
      <Categories />

      <div className="showSmall">
        <ShowAllCategories />
      </div>
    </div>
  );
};

export default Category;
