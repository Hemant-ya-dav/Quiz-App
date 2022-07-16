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
import { auth, db } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { toast } from "react-toastify";
// toast.configure();
import Footer from "./Component/Footer/Footer";
import { Add_question } from "./Component/Create_quizz/Add_question";
import { Create_quizz } from "./Component/Create_quizz/Create_quizz";
import { Quizz_screen } from "./Component/Quizz/Quizz_screen";
import { Result } from "./Component/Quizz/Result"

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
            toast.success(`You Have Already Register`, {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
            });
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
          <Route path="/">
            <Home />
          </Route>
          <Route path="/addquizz">
            <Add_question/>
            <Create_quizz/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
