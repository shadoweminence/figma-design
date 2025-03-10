import React from "react";
import Header from "../Header/Header";
import Products from "../Products/Products";
import Offers from "../Offer/Offers";
import Categories from "../Categories/Categories";
import Hints from "../Hints/Hints";
import Bundles from "../Bundle/Bundles";
import Ads from "../Ads/Ads";
import DPD from "../DPD";
import Events from "../Events/Events";
import Footer from "../Footer/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <Products />
      <Offers />
      <Categories />
      <Hints />
      <Bundles />
      <Ads />
      <DPD />
      <Events />
      <Footer />
    </>
  );
};

export default HomePage;
