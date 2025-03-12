import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import companyLogo from "../../../assets/logotype.png";
import "../../../css/Header/laptop/nav.css";
import { products } from "../../../Utils/Items";
import { Product } from "../../../Utils/Interface";

const MidNav: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredProducts([]); // Reset when input is empty
    } else {
      setFilteredProducts(
        products.filter((product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm]);

  return (
    <nav className="headNav">
      <div className="laptopNavLogo">
        <img src={companyLogo} alt="logo" />
      </div>
      <div>
        <div className="search-containers">
          <IoSearch className="search-icons" />
          <input
            type="text"
            value={searchTerm}
            placeholder="Search by product or SKU"
            className="searchItem"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="searchResults">
          {filteredProducts.length > 0 ? (
            <ul>
              {filteredProducts.map((product) => (
                <li key={product.productId}>
                  <div>{product.name}</div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No products found</p>
          )}
        </div>
      </div>
      <div>
        <button className="quickOrder">Quick Order Form</button>
      </div>
    </nav>
  );
};

export default MidNav;
