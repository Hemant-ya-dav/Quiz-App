import React from "react";
// import "../style.css";

<<<<<<< HEAD
const Result = ({ score, playagain, length }) => (
  <div className="score-board" style={{display:"flex", marginTop:"200px", justifyContent:"center",color:"white",alignItems:"center"}}>
    <div className="score" style={{fontSize:"100px"}} >
=======
const Result = ({ score, playagain, length, player }) => (
  <div className="score-board">
    <div className="score">
>>>>>>> 49669f0180b13185e2a0b602acab4ddb5a0bc8ed
      {" "}
      congratulation Your score is {score} 
    </div>
    
    {/* <button className="playBtn" onClick={playagain}>
      {" "}
      Play Again{" "}
    </button> */}
  </div>
);

export default Result;
