import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Add_question } from "./Add_question";
import Form from "react-bootstrap/Form";
import "./Create_quizz.css";
import { useDispatch, useSelector } from "react-redux";
import {
  REMOVE_FROM_QUESTION,
  selectDetails,
  selectUser,
} from "../../features/detailSlice";
import Tilt from "react-vanilla-tilt";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../Firebase";
import { v4 as uuid } from "uuid";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

export const Create_quizz = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());
  const [topic, settopic] = useState("");
  const user = useSelector(selectUser);
  const history = useHistory();
  // console.log(startDate);

  let handleColor = (time) => {
    return time.getHours() > 12 ? "text-success" : "text-error";
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const questionenter = useSelector(selectDetails);

  const handleEnterquestion = () => {
    var date = new Date(startDate);
    var milliseconds = date.getTime();
    console.log(milliseconds);
    const unique_id = uuid();
    console.log(unique_id)
    const small_id = unique_id.slice(0, 8);
    console.log(small_id);
    setDoc(doc(db, "userInfo", `${user.email}`, "question",`${small_id}`), {
      topic: topic,
      questions: questionenter,
      endtime: milliseconds,
      timestep: serverTimestamp(),
      DateStart: new Date(),
    });
    toast.success(`Quizz is Successfully added`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
    history.push("/");
  };

  return (
    <div className="create_quiz">
      <Form.Group
        className="mb-3"
        style={{ marginTop: "100px" }}
        controlId="formBasicEmail"
      >
        <Form.Label style={{ textAlign: "center" }}>Name of Quizz</Form.Label>
        <Form.Control
          onChange={(e) => settopic(e.target.value)}
          value={topic}
          type="text"
          placeholder=""
        />
        {/* <Form.Text className="text-muted">Choose a relateable name</Form.Text> */}
      </Form.Group>

      {/* <div>Display questions</div> */}
      <div className="question_submit">
        <Button
          variant="primary"
          style={{ marginRight: "10px" }}
          onClick={handleShow}
        >
          Add Question
        </Button>
        {questionenter.length != 0 ? (
          <Button variant="primary" onClick={handleEnterquestion}>
            Submit
          </Button>
        ) : (
          ""
        )}
      </div>
      <div className="date_picker">
        <h4>Enter Ending Date</h4>
        <DatePicker
          showTimeSelect
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          timeClassName={handleColor}
        />
      </div>
      <Offcanvas
        style={{ width: "500px" }}
        show={show}
        onHide={handleClose}
        backdrop="static"
        placement="end"
      >
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Add_question handlecloses={handleClose} />
      </Offcanvas>
      <div className="list_question">
        {questionenter?.map((data, index) => (
          <Tilt
            style={{
              marginTop: "30px",
              padding: "0px",
              width: "50%",
              height: "300px",
            }}
            options={{ scale: 2, glare: true, "max-glare": 1, max: 25 }}
          >
            <div className="quiz_container">
              <div className="quizz_card">
                <div className="quizz_question">
                  <h1>{data.question}</h1>
                  <IconButton
                    className="small_closeprofile"
                    onClick={() => dispatch(REMOVE_FROM_QUESTION(index))}
                  >
                    <CloseIcon />
                  </IconButton>
                </div>
                <div className="quizz_detail">
                  <ol type="1">
                    <h3>
                      <li>{data.Option1}</li>
                    </h3>
                    <h3>
                      <li>{data.Option2}</li>
                    </h3>
                    <h3>
                      <li>{data.Option3}</li>
                    </h3>
                    <h3>
                      <li>{data.Option4}</li>
                    </h3>
                  </ol>
                </div>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
};
