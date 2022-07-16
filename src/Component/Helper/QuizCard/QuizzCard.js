import React, { useEffect, useState } from "react";
import "./QuizzCard.css";
import Tilt from "react-vanilla-tilt";
import { useHistory } from "react-router-dom";
import { Button, IconButton } from "@mui/material";
import CountdownTimer from "../CountDown/CountdownTimer";
import CloseIcon from "@mui/icons-material/Close";

function QuizzCard() {
  const history = useHistory();

  const [seed, setseed] = useState("");

  useEffect(() => {
    setseed(Math.floor(Math.random() * 5000));
  }, []);

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
              <div>
                <img
                  src={`https://avatars.dicebear.com/api/human/${seed}.svg`}
                  alt=""
                />
              </div>
              <div className="delete_quizz">
                <IconButton
                  className="small_closeprofile"
                  style={{ width: "40px", height: "40px"}}
                  // onClick={() => dispatch(SMALL_PROFILE(false))}
                >
                  <CloseIcon
                    style={{ width: "30px", height: "30px", color: "black" }}
                  />
                </IconButton>
              </div>
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
