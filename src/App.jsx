import { useState } from "react";
import "./App.css";
import Display from "./components/Display/Display.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";

import beer from "./data/beer";

const App = () => {
  const [beers, setBeers] = useState([]);
  const [searchText, setSearchText] = useState("");
  const handleInput = (event) => {
    setSearchText(event.target.value);
  };
  const filteredBeers = beer.filter((beer) => {
    const beersLower = beer.name.toLowerCase();
    const searchTextLower = searchText.toLocaleLowerCase();

    if (beersLower.includes(searchTextLower)) {
      return true;
    } else {
      return false;
    }
  });

  return (
    <div className="container">
      <p>{searchText}</p>
      <Navigation
        searchText={searchText}
        setBeers={setBeers}
        handleInput={handleInput}
      />
      {beers && <Display beers={filteredBeers} />}
    </div>
  );
};
export default App;
