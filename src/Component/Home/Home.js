import React from "react";
import QuizzCard from "../Helper/QuizCard/QuizzCard";
import "./Home.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/detailSlice";

function Home() {
  const user = useSelector(selectUser);

  return (
    <div className="home_page">
      <div className="home_div">
        <QuizzCard />
      </div>
      {user!==null ? (
        <div
          className="upscroll_main"
          onClick={() =>
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            })
          }
        >
          <div className="upscroll">
            <IconButton className="key_icon">
              <AddCircleOutlineIcon className="keyup_board" />
            </IconButton>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Home;
