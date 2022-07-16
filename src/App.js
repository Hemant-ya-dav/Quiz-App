import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import {
  selectsmallbasket,
  selectsmalllogin,
  selectsmallprofile,
  SET_USER,
} from "./features/detailSlice";
import { useDispatch, useSelector } from "react-redux";
import Login from "./Component/LoginPage/Login";
import Home from "./Component/Home/Home";
import SmallProfile from "./Component/LoginPage/SmallProfile";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "./Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// toast.configure();
import Footer from "./Component/Footer/Footer";
import { Add_question } from "./Component/create_quizz/Add_question";
import { Create_quizz } from "./Component/create_quizz/Create_quizz";

function App() {
  const dispatch = useDispatch();

  useEffect(
    () =>
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const docRef = doc(db, "userInfo", user.email);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            user.displayName = docSnap.data().name;
            user.photoURL = docSnap.data().photourl;
            dispatch(SET_USER(user));
          }
          // console.log("This is user auth function", user);
        }
      }),
    []
  );

  const smallprof = useSelector(selectsmallprofile);
  const smalllogi = useSelector(selectsmalllogin);

  return (
    <Router>
      <div className="App">
        <Navbar />
        {smallprof ? <SmallProfile /> : ""}
        {smalllogi ? <Login /> : ""}
        <Switch>
          <Route path="/addquestion">
            <Create_quizz />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
