import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <div>
      <Container className="p-5 mt-5">
        <h2>Make An Appointment</h2>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="number" placeholder="Enter Your Number" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="text" placeholder="sickness reason" />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Describbe Your problems</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
