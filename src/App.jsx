import { useState } from "react";
import "./App.css";
import Display from "./components/Display/Display.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";
import Search from "./components/Search/Search";

import beer from "./data/beer";

const App = () => {
  const [searchText, setsearchText] = useState();
  const handleInput = () => {
    console.log("handle Input used");
  };
  return (
    <div className="app">
      <div className="beer-container">
        <div>
          {" "}
          Hello World
          <Navigation
            label={"beer"}
            searchText={searchText}
            handleInput={handleInput}
          />
        </div>
        <Display />
      </div>
    </div>
  );
};
export default App;
