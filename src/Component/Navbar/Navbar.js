import React from "react";
import "./Navbar.css";
import logo from "./logo.png";
import { useDispatch, useSelector } from "react-redux";
import $ from "jquery";
import {
  selectUser,
  SMALL_BASKET,
  SMALL_LOGIN,
  SMALL_PROFILE,
} from "../../features/detailSlice";
import PersonIcon from "@mui/icons-material/Person";
import { useHistory } from "react-router-dom";

function Navbar() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const history = useHistory();
  const xwidth = window.screen.width;

  return (
    <div className="navbar_body">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a
            className="navbar-brand logo_img"
            onClick={() => {
              if (xwidth <= 990) {
                $(".navbar-collapse").hide(500, "linear");
              }
              history.push("/");
            }}
          >
            <img
              src={logo}
              style={{ width: "22vw", height: "5vh", objectFit: "contain" }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => $(".navbar-collapse").show("slide")}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse navbar_main"
            id="navbarNavDropdown"
            onClick={() => {
              if (xwidth <= 990) {
                $(".navbar-collapse").toggle(500, "linear");
              }
            }}
          >
            <ul className="navbar-nav">
              <li className="nav-item nav_items">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              {/* {user !== null ? (
                <li className="nav-item nav_items">
                  <a className="nav-link" href="#">
                    Quizz
                  </a>
                </li>
              ) : (
                ""
              )} */}
              <div className="basket_icons">
                <li
                  className="nav-item nav_icons"
                  onMouseEnter={() => {
                    if (xwidth <= 990) {
                      $(".navbar-collapse").toggle(500, "linear");
                    }
                    dispatch(SMALL_PROFILE(true));
                  }}
                  style={{marginLeft:"130vh"}}
                >
                  <PersonIcon />
                  <span>Login</span>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
