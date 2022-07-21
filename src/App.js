import React, { useEffect, useState } from "react";
import Figure from "./components/Figure/Figure";
import Header from "./components/Header/Header";
import Word from "./components/Word/Word";
import WrongLetters from "./components/WrongLetters/WrongLetters";
import Notification from "./components/Notification/Notification";
import Popup from "./components/Popup/Popup";
import { showNotification as show } from "./helpers/helpers";
import "./index.css";

const words = [
  "abruptly",
  "absurd",
  "abyss",
  "affix",
  "askew",
  "avenue",
  "awkward",
  "axiom",
  "azure",
  "bagpipes",
  "bandwagon",
  "banjo",
  "bayou",
  "beekeeper",
  "bikini",
  "lymph",
  "marquis",
  "matrix",
  "megahertz",
  "microwave",
  "mnemonic",
  "mystify",
  "naphtha",
  "nightclub",
  "nowadays",
  "numbskull",
  "nymph",
  "onyx",
  "ovary",
  "oxidize",
  "oxygen",
  "pajama",
  "peekaboo",
  "joking",
  "jovial",
  "joyful",
  "juicy",
  "jukebox",
  "jumbo",
  "kayak",
  "kazoo",
  "keyhole",
  "khaki",
  "kilobyte",
  "kiosk",
  "kitsch",
  "kiwifruit",
  "smart",
  "dumb",
  "knapsack",
  "larynx",
];

let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const inputHandler = (event) => {
      const { key, keyCode } = event;
      if (
        playable &&
        ((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122))
      ) {
        const letter = key.toLowerCase();

        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            //notification
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            //notification
            show(setShowNotification);
          }
        }
      }
    };
    window.addEventListener("keydown", inputHandler);
    return () => window.removeEventListener("keydown", inputHandler);
  }, [correctLetters, wrongLetters, playable, showNotification]);

  const playAgain = () => {
    setPlayable(true);
    setCorrectLetters([]);
    setWrongLetters([]);
    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  };
  return (
    <React.Fragment>
      <Header />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <Popup
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        setPlayable={setPlayable}
        selectedWord={selectedWord}
        playAgain={playAgain}
      />
      <Notification showNotification={showNotification} />
    </React.Fragment>
  );
}

export default App;
