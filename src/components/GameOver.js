import React from "react";

const GameOver = (props) => {
  // let message = "";

  // if (props.score <= 50) {
  //   message = "You can do better";
  // } else if (props.score >= 51 && props.score <= 100) {
  //   message = "pretty good";
  // } else {
  //   message = "wow!";
  // }
  return (
    <div className="overlay">
      <div className="gameover_box">
        <h2>Game Over</h2>
        <p> Score was: {props.score}</p>
        <p>{props.message}</p>
        <button onClick={props.click}>X</button>
      </div>
    </div>
  );
};

export default GameOver;
