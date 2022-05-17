import React from "react";
import "./Search.scss";

const Search = (props) => {
  const { handleInput, searchText } = props;

  return (
    <div className="search">
      <input
        value={searchText}
        type="text"
        placeholder="Search by beer name"
        onChange={handleInput}
      />
    </div>
  );
};

export default Search;
