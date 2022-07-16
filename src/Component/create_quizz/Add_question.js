import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_TO_QUESTION } from "../../features/detailSlice";

export const Add_question = ({ handlecloses }) => {
  const dispatch = useDispatch();

  const [questionlist, setquestionlist] = useState({
    question: "",
    Option1: "",
    Option2: "",
    Option3: "",
    Option4: "",
    answer: "",
  });

  const checkEnterquestion = () => {
    console.log(questionlist);
    dispatch(ADD_TO_QUESTION(questionlist));
    handlecloses();
  };

  return (
    <>
      <Form.Group
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        className="mb-3"
      >
        <Form.Label>Question</Form.Label>
        <Form.Control
          style={{ width: "80%", margin: "20px" }}
          onChange={(e) => {
            setquestionlist({ ...questionlist, question: e.target.value });
          }}
          type="text"
          placeholder="Enter Question"
        />
        {/* <Form.Control
          type="number"
          placeholder="Number Of Question"
          onChange={(e) => setNumberOfQuestion(e.target.value)}
        /> */}
      </Form.Group>
      <Row xs={1} md={2} className="g-4">
        {/* <Col> */}
        <Card style={{ width: "50%", marginLeft: "10px" }}>
          <Card.Body>
            <Card.Title>Option 1</Card.Title>
            <Form.Control
              onChange={(e) => {
                setquestionlist({
                  ...questionlist,
                  Option1: e.target.value,
                });
              }}
              type="text"
              placeholder="Enter Option "
            />
          </Card.Body>
        </Card>
        <Card style={{ width: "45%" }}>
          <Card.Body>
            <Card.Title>Option 2</Card.Title>
            <Form.Control
              onChange={(e) => {
                setquestionlist({
                  ...questionlist,
                  Option2: e.target.value,
                });
              }}
              type="text"
              placeholder="Enter Option "
            />
          </Card.Body>
        </Card>
        <Card style={{ width: "50%", marginLeft: "10px" }}>
          <Card.Body>
            <Card.Title>Option 3</Card.Title>
            <Form.Control
              onChange={(e) => {
                setquestionlist({
                  ...questionlist,
                  Option3: e.target.value,
                });
              }}
              type="text"
              placeholder="Enter Option "
            />
          </Card.Body>
        </Card>
        <Card style={{ width: "45%" }}>
          <Card.Body>
            <Card.Title>Option 4</Card.Title>
            <Form.Control
              onChange={(e) => {
                setquestionlist({
                  ...questionlist,
                  Option4: e.target.value,
                });
              }}
              type="text"
              placeholder="Enter Option "
            />
          </Card.Body>
        </Card>
        {/* </Col> */}
      </Row>
      <Card>
        <Card.Body>
          <Card.Title>Enter Answer</Card.Title>
          <Form.Control
            onChange={(e) => {
              setquestionlist({ ...questionlist, answer: e.target.value });
            }}
            type="text"
            placeholder="Enter Option "
          />
        </Card.Body>
      </Card>
      <Button onClick={checkEnterquestion} variant="primary" type="submit">
        Submit
      </Button>
    </>
  );
};
