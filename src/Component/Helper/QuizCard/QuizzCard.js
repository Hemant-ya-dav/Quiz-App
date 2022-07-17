import React, { useEffect, useState } from "react";
import "./QuizzCard.css";
import Tilt from "react-vanilla-tilt";
import { useHistory } from "react-router-dom";
import { Button, IconButton } from "@mui/material";
import CountdownTimer from "../CountDown/CountdownTimer";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { ALL_TO_QUIZ, selectUser } from "../../../features/detailSlice";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../Firebase";
import moment from "moment";

function QuizzCard(props) {
  const history = useHistory();
  const { qid, endtime, datetime, topic, timestemp } = props;
  const [questions, setquestion] = useState(props.question);
  const [seed, setseed] = useState("");
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  // console.log(endtime, questions);

  useEffect(() => {
    // dispatch(
    //   ALL_TO_QUIZ({ qid, endtime, datetime, topic, timestemp, questions })
    // );
    setseed(Math.floor(Math.random() * 5000));
  }, []);

  const THREE_DAYS_IN_MS = endtime;
  // console.log("end time", THREE_DAYS_IN_MS);
  // const NOW_IN_MS = moment();
  // // console.log(NOW_IN_MS);

  // const diffInMs = moment(THREE_DAYS_IN_MS.diff(NOW_IN_MS));
  // // console.log(diffInMs)
  // const dateTimeAfterThreeDays = diffInMs;

  const productdetail = () => {
    history.push("/productpage");
  };

  const deleteQuiz = async () => {
    await deleteDoc(doc(db, "userInfo", user?.email, "question", qid));
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
                  onClick={() => deleteQuiz()}
                >
                  <CloseIcon
                    style={{ width: "30px", height: "30px", color: "black" }}
                  />
                </IconButton>
              </div>
            </div>
            <div className="product_detail">
              <div className="quiz_detail">
                <h3>{user.displayName}</h3>
                <h5>Title : {topic}</h5>
                <h5>No. Question :{questions.length} </h5>
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
                  style={{ textDecoration: "none" }}
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
