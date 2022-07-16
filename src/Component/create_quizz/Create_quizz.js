import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Add_question } from './Add_question';
import Form from 'react-bootstrap/Form';


export const Create_quizz = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name of Quizz</Form.Label>
                <Form.Control type="text" placeholder="" />
                <Form.Text className="text-muted">
                    Choose a relateable name
                </Form.Text>
            </Form.Group>

            
            <div>Display questions</div>
            <Button variant="primary" onClick={handleShow}>
                Add Question
            </Button>
            <Offcanvas show={show} onHide={handleClose} backdrop="static">
                <Offcanvas.Header closeButton>
                </Offcanvas.Header>
                <Add_question />
            </Offcanvas>
        </>
    )
}
