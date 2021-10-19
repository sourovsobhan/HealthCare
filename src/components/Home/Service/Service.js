import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = (props) => {
  const { name, img, id, description, specialist } = props.service;

  return (
    <div>
      <Col>
        <Card style={{ width: "18rem", margin: "10px" }}>
          <img src={img} alt="" width="100%" height="200px" />
          <Card.Body>
            <Card.Title>Name:{name}</Card.Title>
            <h6>
              Specialist:
              {specialist}
            </h6>
            <Card.Text>{description.slice(0, 150)}</Card.Text>
            <Link to={`/details/${id}`}>
              <Button variant="primary">More Details</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Service;
