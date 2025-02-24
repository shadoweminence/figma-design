import "./App.css";
import Nav from "./components/Nav";
import Products from "./components/Products";

import Rough from "./components/Rough";
import Search from "./components/Search";
import ShowAll from "./components/ShowAll";

function App() {
  return (
    <>
      <Nav />
      <Search />
      <Products />
      <ShowAll />

      <br />
      <br />
      <br />
      <Rough />
    </>
  );
}

export default App;
