import React from "react";
import QuizzCard from "../Helper/QuizCard/QuizzCard";
import "./Home.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/detailSlice";
import { Link, useHistory } from "react-router-dom";

function Home() {
  const user = useSelector(selectUser);
  const history = useHistory();

  return (
    <div className="home_page">
      <div className="home_div">
        <QuizzCard />
        <QuizzCard />
        <QuizzCard />
      </div>
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
