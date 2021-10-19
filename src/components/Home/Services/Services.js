import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="my-5">
      <div className="mt-5 p-5">
        <h1>Our services</h1>
      </div>

      <Container>
        <Row md={3} sm={6}>
          {services.map((service, index) => (
            <Service key={index} service={service}></Service>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
