import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export const Quizz_screen = ({
  inde,
  ques,
  option1,
  option2,
  option3,
  option4,
  correctanswer,
  selected,
}) => {
  const handleNext = () => {
    alert("page here");
  };
  // console.log(correctanswer);
  const Option = [option1, option2, option3, option4];
  return (
    <div>
      <h1 style={{ textAlign: "center", padding: 40 }}>
        {" "}
        Question Number {inde + 1}
      </h1>
      <h3 style={{ textAlign: "center", padding: 80 }}>{ques}</h3>
      <Row xs={1} md={2} lg={4} className="g-4">
        {Option.map((option, index) => (
          <Col>
            <Card>
              <Card.Body>
                <Button
                  onClick={() => {
                    console.log(correctanswer, option);
                    if (String(option) == String(correctanswer)) {
                      selected(`${option}`, `${correctanswer}`);
                    }
                  }}
                >
                  {option}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};
