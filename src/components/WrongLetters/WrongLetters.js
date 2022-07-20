import React from "react";
import "./WrongLetters.css";

function WrongLetters({wrongLetters}) {
  return (
    <div className="wrong-letters-container">
      <div>
        {wrongLetters.length > 0 && <p>Wrong❌</p>}
        {wrongLetters.map((letter, i) => {
         return<span key={i}>{letter}</span>;
          })
          .reduce(
            (prev, curr) => (prev === null ? [curr] : [prev, ",", curr]),
            null
          )}
      </div>
    </div>
  );
}

export default WrongLetters;
