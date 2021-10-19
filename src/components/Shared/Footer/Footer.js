import React from "react";
import "./Footer.css";
import { Form, Row, Col, Container } from "react-bootstrap";
const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col>
            <h1>HealthCare</h1>
            <p>
              Basic health services means those health services, including as a
              minimum, but not limited to, emergency care, inpatient hospital
              and physician care, ambulatory physician care, and outpatient and
              preventive medical services.
            </p>
          </Col>

          <Col>
            <h1>Links</h1>
            <ul>
              <li> Home</li>
              <li> About</li>
              <li>Visit us</li>
              <li>facility</li>
              <li>Services</li>
            </ul>
          </Col>

          <Col>
            <h1>Share</h1>
            <ul>
              <li>FaceBook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Whatsapps</li>
              <li>Viber</li>
            </ul>
          </Col>

          <Col>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  className="form"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Messages</Form.Label>
                <Form.Control as="textarea" rows={2} className="form" />
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
      <hr />
      <h1 className="mt-3">Copyright ©2021 All rights reserved </h1>
    </div>
  );
};

export default Footer;
