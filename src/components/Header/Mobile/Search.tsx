import React, { useEffect, useState } from "react";

import { IoSearch } from "react-icons/io5";
import "../../../css/Header/mobile/search.css";
import { products } from "../../../Utils/Items";
import { Product } from "../../../Utils/Interface";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    const delay = 300;
    const getData = setTimeout(() => {
      if (searchTerm.trim() === "") {
        setFilteredProducts([]);
      } else {
        setFilteredProducts(
          products.filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
      }
    }, delay);
    return () => clearTimeout(getData);
  }, [searchTerm]);
  return (
    <div className="search-container">
      <div>
        <IoSearch className="search-icon" />

        <input
          className="mobileSearchInput"
          type="text"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          placeholder="Search by product or SKU"
        />
        {searchTerm.trim() !== "" && (
          <div className="mobSearchResults">
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
        )}
      </div>
    </div>
  );
}
