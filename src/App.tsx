import "./App.css";
import DPD from "./components/DPD";
import Nav from "./components/Nav";
import Ad from "./components/objects/Ad";
import Bundle from "./components/objects/Bundle";
import Categories from "./components/objects/Categories";
import Events from "./components/objects/Events";
import Hints from "./components/objects/Hints";
import Offers from "./components/objects/Offers";
import Products from "./components/objects/Products";

import Rough from "./components/Rough";
import Search from "./components/Search";
import ShowAllCategories from "./components/ShowAllCategories";
import ShowAllEvents from "./components/ShowAllEvents";
import ShowAllHints from "./components/ShowAllHints";
import ShowAll from "./components/ShowAllProducts";
import SignUpForm from "./components/SignUpForm";

function App() {
  return (
    <>
      <Nav />
      <Search />
      <Products />
      <ShowAll />
      <Offers />
      <Categories />
      <ShowAllCategories />
      <Hints />
      <ShowAllHints />
      <Bundle />
      <Ad />
      <DPD />
      <Events />
      <ShowAllEvents />
      <SignUpForm />
      <br />
      <br />
      <br />
      <Rough />
    </>
  );
}

export default App;
