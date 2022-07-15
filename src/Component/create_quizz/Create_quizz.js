import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';            
import React, { useState } from 'react'

export const Create_quizz = () => {
    const [numberOfQuestion, setNumberOfQuestion] = useState(4)
  return (
    <>
    <Form.Group className="mb-3">
        <Form.Label>Question</Form.Label>
        <Form.Control type="text" placeholder="Enter Question" />
        <Form.Control type="number" placeholder="Number Of Question"  onChange={e => setNumberOfQuestion(e.target.value)}/>
      </Form.Group>
    <Row xs={1} md={2} className="g-4">
    {Array.from({ length: numberOfQuestion }).map((_, idx) => (
      <Col>
        <Card>
          
          <Card.Body>
            <Card.Title>Option {idx+1}</Card.Title>
            <Form.Control type="text" placeholder="Enter Option " />
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
  <Button variant="primary" type="submit">
        Submit
      </Button>
  </>
  )
}
