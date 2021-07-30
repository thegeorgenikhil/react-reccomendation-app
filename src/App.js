import "./styles.css";
import React, { useEffect, useState } from "react";

var tedxDB = {
  brain: {
    "How to Get Your Brain to Focus": "4/5",
    "Neurohacking: rewiring your brain": "3.5/5",
    "Hack your own brain": "4.5/5"
  },
  learning: {
    "The first 20 hours -- how to learn anything": "4/5",
    "Learning how to learn": "5/5",
    "How To Learn Anything In 30 Days ": "4/5"
  },
  blockchain: {
    "How the blockchain is changing money and business": "4/5",
    "How Blockchain can transform India": "4.5/5",
    "Cryptocurrency: Hype vs. Fact": "4.5./5"
  }
};

export default function App() {
  var [currentGenre, setGenre] = useState("brain");

  function onClickHandler(clickedItem) {
    setGenre(clickedItem);
  }

  var dbKeys = Object.keys(tedxDB);
  var currentGenreList = Object.keys(tedxDB[currentGenre]);

  return (
    <div>
      <h1>🎙Ted Talks </h1>
      <p>Checkout my favourite TedX Talks.</p>
      <em>Select a genre to get started</em>

      <div>
        {dbKeys.map((items) => (
          <button
            key={items}
            onClick={() => onClickHandler(items)}
            style={{
              backgroundColor: "white",
              padding: "0.5rem",
              margin: "0.5rem",
              borderRadius: "0.5rem"
            }}
          >
            {items}
          </button>
        ))}
      </div>

      <hr />

      <div>
        <ul>
          {currentGenreList.map((items) => (
            <li
              key={items}
              style={{
                listStyle: "none",
                textAlign: "left",
                backgroundColor: "#d9faec",
                margin: "1rem auto",
                padding: "1rem",
                borderRadius: "1rem",
                width: "60%"
              }}
            >
              <div>{items}</div>
              <div>{tedxDB[currentGenre][items]}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
