import React from "react";
// import "../style.css";

const Result = ({ score, playagain, length }) => (
  <div className="score-board" style={{display:"flex", marginTop:"200px", justifyContent:"center",color:"white",alignItems:"center"}}>
    <div className="score" style={{fontSize:"100px"}} >
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
