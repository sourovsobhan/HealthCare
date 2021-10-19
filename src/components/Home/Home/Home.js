import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import About from "../../About/About";
import Header from "../../Shared/Header/Header";
import Service from "../Service/Service";
import Services from "../Services/Services";

import Banner from "./../Banner/Banner";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Container>
        {/* slice data for ui */}
        <h1>Our Services</h1>
        <Row md={3} sm={6}>
          {services.slice(0, 6).map((service) => (
            <Service service={service} key={service.id}></Service>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
