import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import doctor1 from "../../images/doctor/doctor-1.jpg";
import doctor2 from "../../images/doctor/doctor-2.jpg";
import doctor3 from "../../images/doctor/doctor-3.jpg";

const Doctor = () => {
  return (
    <div className="pt-5 mt-5">
      <h1 className="mb-5">Our Doctors</h1>

      <Container className="mb-5">
        <Row sm={12}>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={doctor1}
                width="400px"
                height="200px"
              />
              <Card.Body>
                <Card.Title>Dr.Tanzila</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={doctor2}
                width="400px"
                height="200px"
              />
              <Card.Body>
                <Card.Title>Dr.Sobhan</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={doctor3}
                width="400px"
                height="200px"
              />
              <Card.Body>
                <Card.Title>Dr.Salina</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Doctor;
