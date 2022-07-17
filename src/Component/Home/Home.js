import React, { useEffect, useState } from "react";
import QuizzCard from "../Helper/QuizCard/QuizzCard";
import "./Home.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useDispatch, useSelector } from "react-redux";
import {
  ALL_TO_QUIZ,
  selectDetails,
  selectUser,
} from "../../features/detailSlice";
import { Link, useHistory } from "react-router-dom";
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  orderBy,
  query,
  refEqual,
} from "firebase/firestore";
import { db } from "../../Firebase";
import { ref, onValue } from "firebase/database";

function Home() {
  const user = useSelector(selectUser);
  const questionlist = useSelector(selectDetails);
  const history = useHistory(selectDetails);
  const dispatch = useDispatch();
  const [allquestion, setallquestion] = useState([]);

  useEffect(() => {
    if (user) {
      onSnapshot(
        query(collection(db, "userInfo", user?.email, "question")),
        (snapshot) => {
          if (snapshot) {
            setallquestion(
              snapshot?.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
              }))
            );
          }
        }
      );
    }
  }, [user]);

  console.log(allquestion);

  return (
    <div className="home_page">
      {user !== null ? (
        <div className="home_div">
          {allquestion.map((item, index) => (
            <QuizzCard
              key={item.id}
              qid={item.id}
              endtime={item.endtime}
              datetime={item.DateStart}
              topic={item.topic}
              timestemp={item.timestemp}
              question={item.questions}
            />
          ))}
        </div>
      ) : (
        ""
      )}
      {user !== null ? (
        // <Link to="/addquestion">
        <div
          className="upscroll_main"
          // onClick={() => history.push("/addquestion")}
        >
          <div className="upscroll">
            <Link to="/addquestion">
              <IconButton
                // onClick={() => history.push("/addquestion")}
                className="key_icon"
              >
                <AddCircleOutlineIcon className="keyup_board" />
              </IconButton>
            </Link>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Home;
