import React from "react";
import "./Navbar.css";
import logo from "./logo.png";
import { useDispatch } from "react-redux";
import $ from "jquery";
import {
  SMALL_BASKET,
  SMALL_LOGIN,
  SMALL_PROFILE,
} from "../../features/detailSlice";
import PersonIcon from "@mui/icons-material/Person";

function Navbar() {
  const dispatch = useDispatch();

  const xwidth = window.screen.width;

  return (
    <div className="navbar_body">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a
            className="navbar-brand logo_img"
            href="#"
            onClick={() => {
              if (xwidth <= 990) {
                $(".navbar-collapse").hide(500, "linear");
              }
            }}
          >
            <img
              src={logo}
              style={{ width: "13vw", height: "5vh", objectFit: "cover" }}
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
              <li className="nav-item nav_items">
                <a className="nav-link" href="#">
                  Quizz
                </a>
              </li>
              <div className="basket_icons">
                <li
                  className="nav-item nav_icons"
                  onMouseEnter={() => {
                    if (xwidth <= 990) {
                      $(".navbar-collapse").toggle(500, "linear");
                    }
                    dispatch(SMALL_PROFILE(true));
                  }}
                >
                  <PersonIcon />
                  <span>Profile</span>
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
