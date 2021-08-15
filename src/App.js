import "./styles.css";
import React, { useEffect, useState } from "react";

var tedxDB = {
  brain: {
    "How to Get Your Brain to Focus": ["https://www.youtube.com/watch?v=Hu4Yvq-g7_Y&t=7s","4/5"],
    "Neurohacking: rewiring your brain": ["https://www.youtube.com/watch?v=xzbHtIrb14s&t=15s","3.5/5"],
    "Hack your own brain": ["https://www.youtube.com/watch?v=zAZPsX33YCM&t=10s","4.5/5"]
  },
  learning: {
    "The first 20 hours -- how to learn anything": ["https://www.youtube.com/watch?v=5MgBikgcWnY&t=18s","4/5"],
    "Learning how to learn": ["https://www.youtube.com/watch?v=O96fE1E-rf8&t=6s","5/5"],
    "How To Learn Anything In 30 Days ": ["https://www.youtube.com/watch?v=SKVVSKFdEL4&t=8s","4/5"]
  },
  blockchain: {
    "How the blockchain is changing money and business": ["https://www.youtube.com/watch?v=Pl8OlkkwRpc&t=13s","4/5"],
    "How Blockchain can transform India": ["https://www.youtube.com/watch?v=8fbhI1qVj0c&t=14s","4.5/5"],
    "Cryptocurrency: Hype vs. Fact": ["https://www.youtube.com/watch?v=R8mZ6SbLMbo&t=15s","4.5./5"]
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
              borderRadius: "0.5rem",
              cursor: "pointer"
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
                width: "350px"
              }}
            >
              <div className="headingCat">{items}</div>
              <div className="rating">{tedxDB[currentGenre][items][1]}</div>
              <a href={tedxDB[currentGenre][items][0]} className="watchLink">Watch Here</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
