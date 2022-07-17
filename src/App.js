import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import {
  selectsmallbasket,
  selectsmalllogin,
  selectsmallprofile,
  selectUser,
  SET_USER,
} from "./features/detailSlice";
import { useDispatch, useSelector } from "react-redux";
import Login from "./Component/LoginPage/Login";
import Home from "./Component/Home/Home";
import SmallProfile from "./Component/LoginPage/SmallProfile";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { auth, db } from "./Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// toast.configure();
import Footer from "./Component/Footer/Footer";
import { Add_question } from "./Component/create_quizz/Add_question";
import { Create_quizz } from "./Component/create_quizz/Create_quizz";
import { Quizz_screen } from "./Component/Quizz/Quizz_screen";
import  Result  from "./Component/Quizz/Result";
import QuizzPage from "./Component/Helper/QuizCard/QuizzPage";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(
    () =>
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const docRef = doc(db, "userInfo", user?.email);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            user.displayName = docSnap.data().name;
            console.log(user);
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
        {smallprof ? <SmallProfile /> : ""}
        {smalllogi ? <Login /> : ""}
        <Switch>
          <Route exact path="/quizzpage/:qid">
            <QuizzPage />
          </Route>
          <Route exact path="/quizzscrren">
            <Quizz_screen />
          </Route>
          <Route exact path="/addquestion">
            <Navbar />
            <Create_quizz />
          </Route>
          <Route path="/">
            <Navbar />
            <Home />
          </Route>
        </Switch>
        {/* <Link to="/quizzpage/:qid">
            <QuizzPage />
          </Link>
          <Link to="/quizzscrren">
            <Quizz_screen />
          </Link>
          <Link to="/addquestion">
            <Navbar />
            <Create_quizz />
          </Link>
          <Link to="/">
            <Navbar />
            <Home />
          </Link>
          <Link to="/result">
            <Result/>
          </Link> */}
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
