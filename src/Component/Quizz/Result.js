import React from "react";
// import "../style.css";

const Result = ({ score, playagain, length, player }) => (
  <div className="score-board">
    <div className="score">
      {" "}
      Your score is {score} / {length} correct answer ! ! !{" "}
    </div>
    <button className="playBtn" onClick={playagain}>
      {" "}
      Play Again{" "}
    </button>
  </div>
);

export default Result;
