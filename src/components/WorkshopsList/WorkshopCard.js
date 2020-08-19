const { ReactComponent } = require("*.svg");

import React from "react";

const WorkshopCard = ({ name, description, image, price }) => {
  return (
    <div>
      <div>
        <h1>{name}</h1>
      </div>
      <div>
        <p>{description}</p>
      </div>
      <div>
        <img src={image} alt="workshop image" />
      </div>

      <div>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default WorkshopCard;
