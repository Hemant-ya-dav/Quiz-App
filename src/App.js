import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import {
  selectsmallbasket,
  selectsmalllogin,
  selectsmallprofile,
} from "./features/detailSlice";
import { useSelector } from "react-redux";
// import Login from "./Component/LoginPage/Login";
import Home from "./Component/Home/Home";

function App() {
  const smalllogi = useSelector(selectsmalllogin);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {/* {smalllogi ? <Login /> : ""} */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
