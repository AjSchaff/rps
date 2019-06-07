import React, { useState } from "react";
import "./App.css";

const UserWeapon = props => (
  <h1>
    {props.userWeapon} | {props.AIChoice}
  </h1>
);

const Outcome = props => <h3>{props.outcome}</h3>;

const Score = props => (
  <h5>
    {props.score.wins} | {props.score.loses}
  </h5>
);

const Game = () => {
  const weaponsAvailable = ["rock", "paper", "scissors"];
  const [weapon, selectingWeapon] = useState({
    choice: "Choose your weapon",
    AIChoice: ""
  });
  const [outcome, setOutcome] = useState({
    outcome: "You: "
  });
  const score = {
    wins: 0,
    loses: 0
  };

  function testGame(weapon) {
    debugger;
    if (weapon.choice === weapon.AIChoice) {
      setOutcome({ ...outcome, outcome: "You Tied!" });
    }
  }

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
      <UserWeapon userWeapon={weapon.choice} AIChoice={weapon.AIChoice} />
      {weaponsAvailable.map(item => {
        return (
          <button onClick={handleClick} key={item} value={item}>
            {item}
          </button>
        );
      })}
      <Outcome outcome={outcome.outcome} />
      <Score score={score} />
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
