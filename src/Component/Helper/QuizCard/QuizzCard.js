import React, { useEffect, useState } from "react";
import "./QuizzCard.css";
import Tilt from "react-vanilla-tilt";
import { useHistory } from "react-router-dom";
import { Button, IconButton } from "@mui/material";
import CountdownTimer from "../CountDown/CountdownTimer";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { ALL_TO_QUIZ } from "../../../features/detailSlice";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function QuizzCard(props) {
  const history = useHistory();
  const { qid, endtime, datetime, topic, timestemp } = props;
  const [questions, setquestion] = useState(props.question);
  const [seed, setseed] = useState("");
  const dispatch = useDispatch();
  console.log(endtime, questions);

  useEffect(() => {
    // dispatch(
    //   ALL_TO_QUIZ({ qid, endtime, datetime, topic, timestemp, questions })
    // );
    setseed(Math.floor(Math.random() * 5000));
  }, []);

  const THREE_DAYS_IN_MS = endtime;
  // console.log("end time", THREE_DAYS_IN_MS);
  const NOW_IN_MS = new Date().getTime();
  // console.log(NOW_IN_MS);

  const diffInMs = THREE_DAYS_IN_MS+NOW_IN_MS;
  console.log(diffInMs)
  const dateTimeAfterThreeDays = diffInMs-60*60*60;

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
                  style={{ width: "40px", height: "40px" }}
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
                <h5>Title : {topic}</h5>
                <h5>No. Question : </h5>
              </div>
              <div className="quizz_btn">
                <Link
                  to={{
                    pathname: `/quizzpage/${qid}`,
                    state: {
                      qid: qid,
                      endtime: endtime,
                      datetime: datetime,
                      topic: topic,
                      question: questions,
                      timestemp: timestemp,
                    },
                  }}
                  // params={{
                  //   qid: qid,
                  //   endtime: endtime,
                  //   datetime: datetime,
                  //   topic: topic,
                  //   questions: questions,
                  //   timestemp: timestemp,
                  // }}
                >
                  <Button
                    className="quizz_btn_in"
                    // onClick={() => dispatch(SMALL_LOGIN(true))}
                  >
                    View
                  </Button>
                </Link>
              </div>
              <div className="quizz_counter">
                {/* <CountdownTimer targetDate={dateTimeAfterThreeDays} /> */}
              </div>
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  );
}

export default QuizzCard;
