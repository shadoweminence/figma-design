import "./App.css";
import DPD from "./components/DPD";

import Ad from "./components/Ads/Ad";
import Bundle from "./components/Bundle/Bundle";

import Offers from "./components/Offer/Offers";
import Product from "./components/Products/Product";

import Footer from "./components/Footer/Footer";
import Category from "./components/Categories/Category";
import HintMain from "./components/Hints/HintMain";
import EventMain from "./components/Events/EventMain";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Product />
      <Offers />
      <Category />
      <HintMain />
      <Bundle />
      <Ad />
      <DPD />
      <EventMain />
      <Footer />
    </>
  );
}

export default App;
