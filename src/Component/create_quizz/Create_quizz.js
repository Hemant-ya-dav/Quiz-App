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
} from "../../features/detailSlice";
import Tilt from "react-vanilla-tilt";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export const Create_quizz = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const questionenter = useSelector(selectDetails);
  console.log(questionenter);

  return (
    <div className="create_quiz">
      <Form.Group
        className="mb-3"
        style={{ marginTop: "100px" }}
        controlId="formBasicEmail"
      >
        <Form.Label style={{ textAlign: "center" }}>Name of Quizz</Form.Label>
        <Form.Control type="text" placeholder="" />
        {/* <Form.Text className="text-muted">Choose a relateable name</Form.Text> */}
      </Form.Group>

      {/* <div>Display questions</div> */}
      <Button variant="primary" onClick={handleShow}>
        Add Question
      </Button>
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
