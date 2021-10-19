import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";

const Details = () => {
  const { serviceId } = useParams();

  const [service, setService] = useState({});

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) =>
        setService(data.find((service) => service.id == serviceId))
      );
  }, []);
  const { name, img, address, fee, description } = service;
  return (
    <div className="pt-5 my-5">
      <Container>
        <Row className="mx-auto">
          <Col>
            <h1>More Details</h1>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={img} />
              <Card.Body>
                <Card.Title>Name:{name}</Card.Title>
                <b>fees:{fee}</b>
                <p>address:{address}</p>
                <Card.Text>{description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Details;
