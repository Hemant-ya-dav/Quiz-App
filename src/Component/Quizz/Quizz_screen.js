import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export const Quizz_screen = () => {
  const handleNext = () => {
    alert("page here");
  };
  return (
    <div>
      <h1 style={{ textAlign: "center", padding: 40 }}> Question Number 1</h1>
      <h3 style={{ textAlign: "center", padding: 80 }}>Question</h3>
      <Row xs={1} md={2} lg={4} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Button variant="primary" style={{ margin: 40 }} onClick={handleNext}>
        Next Question
      </Button>
    </div>
  );
};
