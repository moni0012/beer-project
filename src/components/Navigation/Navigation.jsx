import React from "react";
import "./Navigation.scss";
import Search from "../Search/Search";

const Navigation = (props) => {
  const { handleInput, setBeers, searchText } = props;
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
          <input type="checkbox" />
          <br />
        </label>
        <label>
          Classic Range
          <input type="checkbox" /> <br />
        </label>
        <label>
          Acidic (pH {"<"} 4)
          <input type="checkbox" />
        </label>
      </div>
    </div>
  );
};

export default Navigation;
