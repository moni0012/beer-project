import React from "react";
import "./Navigation.scss";
import Search from "../Search/Search";

const Navigation = (props) => {
  const {
    handleInput,
    setBeers,
    searchText,
    handlePHvalue,
    handleAbvValue,
    handleFirstBrewed,
  } = props;
  return (
    <div className="navigation">
      <Search
        searchText={searchText}
        handleInput={handleInput}
        setBeers={setBeers}
      />
      <div className="filterList">
        <label>
          High ABV ({">"} 6.0%)
          <input type="checkbox" onClick={handleAbvValue} />
          <br />
        </label>
        <label>
          Classic Range
          <input type="checkbox" onClick={handleFirstBrewed} /> <br />
        </label>
        <label>
          Acidic (pH {"<"} 4)
          <input type="checkbox" onClick={handlePHvalue} />
        </label>
      </div>
    </div>
  );
};

export default Navigation;
