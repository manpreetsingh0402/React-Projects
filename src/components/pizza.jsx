import React, { useState } from "react";
import data from "../data.json";

function Pizza() {
  const { pizzaMenu } = data;
  const [isClicked, setIsClicked] = useState(false);

  return (
    <ul className="pizzas">
      {pizzaMenu.map((item) => {
        return (
          <li
            onClick={() => setIsClicked(isClicked === item ? null : item)}
            className={`pizza ${item.soldOut ? "sold-out" : ""}`}
          >
            <img src={item.photoName} alt={item.photoName} />
            <div>
              <h3>{item.name}</h3>
              <p>{item.ingredients}</p>
              <span>{item.soldOut ? "Sold Out" : item.price}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default Pizza;
