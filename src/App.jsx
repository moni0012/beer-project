import React, { useState, useEffect } from "react";
import "./App.css";
import Display from "./components/Display/Display.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";

import beer from "./data/beer";

const App = () => {
  const [beers, setBeers] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [phAcidic, setPhAcidity] = useState(false);
  const [abvValue, setAbvValue] = useState(false);
  const [firstBrewed, setFirstBrewed] = useState(false);

  const url = "https://api.punkapi.com/v2/beers";
  const getBeer = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    getBeer(phAcidic, abvValue, firstBrewed);
  }, [phAcidic, abvValue, firstBrewed]);

  const handlePHvalue = (e) => {
    setPhAcidity(e.target.checked);
    console.log(e);
  };

  const handleAbvValue = (e) => {
    setAbvValue(e.target.checked);
  };

  const handleFirstBrewed = (e) => {
    setFirstBrewed(e.target.checked);
  };

  const handleInput = (event) => {
    setSearchText(event.target.value);
  };

  const filteredBeers = beer.filter((beer) => {
    const beersLower = beer.name.toLowerCase();
    const searchTextLower = searchText.toLocaleLowerCase();
    if (phAcidic) {
      if (beer.ph < 4) {
        return false;
      }
    }

    if (abvValue) {
      if (beer.abv > 6.0) {
        return false;
      }
    }
    if (firstBrewed) {
      if (beer.first_brewed > "2010") return false;
    }
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
        handlePHvalue={handlePHvalue}
        handleAbvValue={handleAbvValue}
        handleFirstBrewed={handleFirstBrewed}
      />
      {beers && <Display beers={filteredBeers} />}
    </div>
  );
};
export default App;
