import React from "react";
import "./QuizzCard.css";
import Tilt from "react-vanilla-tilt";
import { useHistory } from "react-router-dom";
import { Button } from "@mui/material";
import CountdownTimer from "../CountDown/CountdownTimer";


function QuizzCard() {
  const history = useHistory();

  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  const productdetail = () => {
    history.push("/productpage");
  };
  return (
    <div className="productitem">
      <Tilt
        style={{ margin: "0px", padding: "0px" }}
        options={{ scale: 2, glare: true, "max-glare": 1, max: 25 }}
      >
        <div className="product_container">
          <div className="product_card">
            <div className="product_content">
              <img
                src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.biography.com%2F.image%2Far_1%3A1%252Cc_fill%252Ccs_srgb%252Cfl_progressive%252Cq_auto%3Agood%252Cw_1200%2FMTc5OTk2ODUyMTMxNzM0ODcy%2Fgettyimages-1229892983-square.jpg&imgrefurl=https%3A%2F%2Fwww.biography.com%2Fbusiness-figure%2Felon-musk&tbnid=3Ooc13ZHuSIOWM&vet=12ahUKEwjjlc3EtPz4AhV5_zgGHd4BCsEQMygEegUIARDiAQ..i&docid=h24P-DAcCzayvM&w=1200&h=1200&q=elon%20musk&ved=2ahUKEwjjlc3EtPz4AhV5_zgGHd4BCsEQMygEegUIARDiAQ"
                alt=""
                onClick={productdetail}
              />
            </div>
            <div className="product_detail">
              <div className="quiz_detail">
                <h3>Saurabh Yadav</h3>
                <h5>Title : Science</h5>
                <h5>No. Question : 10</h5>
              </div>
              <div className="quizz_btn">
                <Button
                  className="quizz_btn_in"
                  // onClick={() => dispatch(SMALL_LOGIN(true))}
                >
                  Start
                </Button>
              </div>
              <div className="quizz_counter">
                <CountdownTimer targetDate={dateTimeAfterThreeDays} />
              </div>
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  );
}

export default QuizzCard;
