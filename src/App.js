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
import Footer from "./Component/Footer/Footer";
import { Add_question } from "./Component/create_quizz/Add_question";
import { Create_quizz } from "./Component/create_quizz/Create_quizz";

function App() {
  const smalllogi = useSelector(selectsmalllogin);

  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        {/* {smalllogi ? <Login /> : ""} */}
        {/* <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes> */}
        {/* <Footer/> */}
        {/* <Add_question/> */}
        <Create_quizz/>
      </BrowserRouter>
    </div>
  );
}

export default App;
