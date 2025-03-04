import "./App.css";
import DPD from "./components/DPD";

import Offers from "./components/Offer/Offers";

import Footer from "./components/Footer/Footer";

import Header from "./components/Header/Header";
import Ads from "./components/Ads/Ads";
import Bundles from "./components/Bundle/Bundles";
import Products from "./components/Products/Products";
import Categories from "./components/Categories/Categories";
import Events from "./components/Events/Events";
import Hints from "./components/Hints/Hints";

function App() {
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
}

export default App;
