import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Electronics from "./components/pages/Electronics";
import HomePage from "./components/pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/pages/electronics" element={<Electronics />} />
      </Routes>
    </Router>
  );
}

export default App;
