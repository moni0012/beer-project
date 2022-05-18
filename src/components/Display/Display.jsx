import React, { useState } from "react";
import "./Display.scss";

const Display = (props) => {
  const { beers } = props;

  return (
    <div className="display">
      {beers.map((beer) => {
        return (
          <div className="beerCard" key={beer.id}>
            <img src={beer.image_url} alt={beer.name} />
            <div className="description">
              <h2>{beer.name}</h2>
              <h3>{beer.tagline}</h3>
              <p>{beer.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Display;
