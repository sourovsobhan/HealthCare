import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import about from "../../images/About/About.svg";

const About = () => {
  return (
    <div>
      <Container>
        <h2 className="p-5 my-5">
          About<span className="text-warning">Us</span>
        </h2>
        <Row>
          <Col sm={12} lg={6}>
            <img src={about} alt="" />
          </Col>
          <Col sm={12} lg={6}>
            <h3>We take care of your healthy life</h3>
            <p className="mt-3 about-description">
              A duty of care is an obligation on one party to take care to
              prevent harm being suffered by another. Generally doctors owe a
              duty of care to their patients. A Hospital Trust would normally
              owe a duty of care to a patient of a doctor employed by the Trust.
              TAKING CARE OF PATIENTS emphasizes objective, professional care,
              such as the medical and psychological aspects of nursing. CARING
              FOR PATIENTS, on the other hand, is a humanistic way of
              interacting with patients that demonstrates sincere care and
              concern for patients simply because they are human beings. It
              means providing care that is free from harm, minimizes redundancy
              and waste, allows timely access to needed services, follows best
              practices, and incorporates patients' preferences and treatment
              priorities
            </p>
            <Button variant="warning">Learn-More</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
