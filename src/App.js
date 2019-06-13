import React, { useState, useEffect } from "react";
import "./App.css";
import WeaponShowdown from "./components/WeaponShowdown";
import Score from "./components/Score";

const Game = () => {
  const weaponsAvailable = ["rock", "paper", "scissors"];
  const [weapon, selectingWeapon] = useState({
    choice: "| Choose your weapon",
    AIChoice: ""
  });
  const [outcome, setOutcome] = useState({
    outcome: "You: "
  });
  const [wins, incrementWins] = useState(0);
  const [losses, incrementLosses] = useState(0);

  useEffect(() => {
    function testGame() {
      debugger;
      if (weapon.choice[0] === weapon.AIChoice[0]) {
        setOutcome({ ...outcome, outcome: "You Tied!" });
      } else {
        debugger;
        switch (weapon.choice[0]) {
          case "rock":
            return weapon.AIChoice[0] === "scissors"
              ? setOutcome({ ...outcome, outcome: "You Win!" })
              : setOutcome({ ...outcome, outcome: "You Lost" });
          case "paper":
            return weapon.AIChoice[0] === "rock"
              ? setOutcome({ ...outcome, outcome: "You Win!" })
              : setOutcome({ ...outcome, outcome: "You Lost" });
          case "scissors":
            return weapon.AIChoice[0] === "paper"
              ? setOutcome({ ...outcome, outcome: "You Win!" })
              : setOutcome({ ...outcome, outcome: "You Lost" });
          default:
            return undefined;
        }
      }
    }
    testGame();
  }, [outcome, weapon.AIChoice, weapon.choice]);

  function handleClick(e) {
    e.preventDefault();
    selectingWeapon({
      ...weapon,
      choice: [e.target.value],
      AIChoice: [weaponsAvailable[Math.floor(Math.random() * 3) + 0]]
    });
  }

  return (
    <div>
      <WeaponShowdown
        userWeapon={weapon.choice}
        AIChoice={weapon.AIChoice}
        outcome={outcome.outcome}
      />
      {weaponsAvailable.map(item => {
        return (
          <button onClick={handleClick} key={item} value={item}>
            {item}
          </button>
        );
      })}
      <Score wins={wins} losses={losses} />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Rock Paper Scissors
        <Game />
      </header>
    </div>
  );
}

export default App;
