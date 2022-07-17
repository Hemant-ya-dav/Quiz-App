import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Login.css";
import CloseIcon from "@mui/icons-material/Close";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { Button } from "@mui/material";
import {
  selectUser,
  SMALL_LOGIN,
  SMALL_PROFILE,
  SET_USER,
} from "../../features/detailSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth, db } from "../../Firebase";
import { useHistory } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
// toast.configure();

function Login() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [Continue, setContinue] = useState(false);

  // const [userInfo, setuserInfo] = useState([]);
  const history = useHistory();

  const [UserInfo, setInfo] = useState({
    FirstName: "",
    email: "",
    password: "",
  });

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, UserInfo.email, UserInfo.password)
      .then(async (userCredential) => {
        let userinfo = userCredential.user;
        const docRef = doc(db, "userInfo", UserInfo.email);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          userinfo.displayName = docSnap.data().name;
        }
        // console.log("This login time data", userinfo.displayName);
        dispatch(SET_USER(userinfo));
        toast.success(`Welcome Back`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
        dispatch(SMALL_LOGIN(false));
      })
      .catch((error) => {
        const errorCode = error.code;
        // console.log(errorCode);
        const errorMessage = error.message;
        toast.success(`${errorMessage}`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
        // console.log(errorMessage);
      });
  };

  const register = async (e) => {
    e.preventDefault();
    console.log(UserInfo);

    createUserWithEmailAndPassword(auth, UserInfo.email, UserInfo.password)
      .then((userCredential) => {
        var user = userCredential.user;
        // console.log(user);
        user.displayName = UserInfo.FirstName;
        dispatch(SET_USER(user));
        dispatch(SMALL_LOGIN(false));
        setDoc(doc(db, "userInfo", `${UserInfo.email}`), {
          name: UserInfo.FirstName,
          email: UserInfo.email,
        });
        toast.success(`${UserInfo.FirstName} Register Successfully`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  };

  return (
    <div className="loginpage">
      <div className="loginpage_container">
        <div className="loginpage_card">
          <div
            className="login_close"
            onClick={() => dispatch(SMALL_LOGIN(false))}
          >
            <IconButton className="login_closeprofile">
              <CloseIcon />
            </IconButton>
          </div>
          <div className="login_content">
            <h5>Welcome To Quizz World</h5>
            {/* <p>Login To Quizz World</p> */}
            {/* <div className="login_signlogo">
              <div className="login_facebook">
                <FacebookIcon className="fb_logo" color="primary" />
                <span>Facebook</span>
              </div>
              <div
                className="login_google"
                style={{ border: "2px solid #df4a32", color: "#df4a32" }}
              >
                <GoogleIcon className="fb_logo" color="rgb(66, 133, 244)" />
                <span>Google</span>
              </div>
            </div> */}
            {/* <div className="or-separator">
              <hr></hr>
              <span
                className="or-text-desktop"
                style={{ marginTop: "0px", marginBottom: "12px" }}
              >
                Or
              </span>{" "}
              <hr></hr>
            </div> */}
            <div className="login_inputbox">
              <div id="sign-in-button"></div>

              <div className="login_input">
                {Continue ? (
                  <>
                    <form className="row g-3 login_form1">
                      <div className="col-md-4 inputtag_div">
                        <label for="validationDefault01" className="form-label">
                          Enter Your Full Name
                        </label>
                        <input
                          type="text"
                          className="form-control text_inputtag"
                          id="validationDefault01"
                          required
                          value={UserInfo.FirstName}
                          onChange={(e) => {
                            setInfo({ ...UserInfo, FirstName: e.target.value });
                          }}
                        />
                      </div>
                      <div className="col-md-4 inputtag_div">
                        <label for="validationDefault01" className="form-label">
                          Enter Your Email*
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="validationDefault01"
                          required
                          value={UserInfo.email}
                          onChange={(e) => {
                            setInfo({ ...UserInfo, email: e.target.value });
                          }}
                        />
                      </div>
                      <div className="col-md-4 inputtag_div">
                        <label for="validationDefault01" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="validationDefault01"
                          required
                          value={UserInfo.password}
                          onChange={(e) => {
                            setInfo({ ...UserInfo, password: e.target.value });
                          }}
                        />
                      </div>
                      <div className="col-12">
                        <button
                          className="btn btn-primary continue_btn"
                          type="submit"
                          onClick={(e) => {
                            // setContinue(false);
                            register(e);
                          }}
                        >
                          SING UP
                        </button>
                      </div>
                    </form>
                    <div className="or-separator">
                      <hr></hr>
                      <span
                        className="or-text-desktop"
                        style={{ marginTop: "0px", marginBottom: "12px" }}
                      >
                        Or
                      </span>{" "}
                      <hr></hr>
                    </div>
                    <a
                      style={{
                        color: "blue",
                        cursor: "pointer",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      onClick={() => setContinue(false)}
                    >
                      LOGIN IN
                    </a>
                  </>
                ) : (
                  <>
                    <form className="row g-3 login_form1">
                      <div className="col-md-4 inputtag_div">
                        <label for="validationDefault01" className="form-label">
                          Enter Your Email*
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="validationDefault01"
                          required
                          value={UserInfo.email}
                          onChange={(e) => {
                            setInfo({ ...UserInfo, email: e.target.value });
                          }}
                        />
                      </div>
                      <div className="col-md-4 inputtag_div">
                        <label for="validationDefault01" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="validationDefault01"
                          required
                          value={UserInfo.password}
                          onChange={(e) => {
                            setInfo({ ...UserInfo, password: e.target.value });
                          }}
                        />
                      </div>
                      <div className="col-12">
                        <button
                          className="btn btn-primary continue_btn"
                          type="submit"
                          onClick={(e) => {
                            signIn(e);
                          }}
                        >
                          LOGIN IN
                        </button>
                      </div>
                    </form>
                    <div className="or-separator">
                      <hr></hr>
                      <span
                        className="or-text-desktop"
                        style={{ marginTop: "0px", marginBottom: "12px" }}
                      >
                        Or
                      </span>{" "}
                      <hr></hr>
                    </div>
                    <a
                      style={{
                        color: "blue",
                        cursor: "pointer",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      onClick={() => setContinue(true)}
                    >
                      Sign Up
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;