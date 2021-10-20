import { Col, Container, Form, Row, Button, Image } from "react-bootstrap";

import "./Login.css";
import contact from "../../images/contact/img-contact.jpg";
import { useState } from "react";

import useAuth from "./../../Hook/useFirebase/useAuth";
import { useHistory, useLocation } from "react-router";

const Login = () => {
  const {
    handleGoogleSignIn,
    handleGithubSignIn,
    handleUserLogin,
    handleUserRegister,
    user,
  } = useAuth();

  const [toggle, setToggle] = useState(true);

  const toggleLogin = () => {
    setToggle(!toggle);
  };
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [displayname, setDisplayname] = useState();

  const hanldeEmail = (e) => {
    setEmail(e.target.value);
  };
  const hanldePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleName = (e) => {
    setDisplayname(e.target.value);
  };
  const handleRegister = () => {
    handleUserRegister(displayname, email, password);
  };
  const handleLogin = () => {
    handleUserLogin(email, password);
  };

  const history = useHistory();
  const location = useLocation();
  const redirectUrl = location?.state?.from || "/";
  console.log(location.state);
  const googleSignIn = () => {
    handleGoogleSignIn()
      .then((res) => {
        history.push(redirectUrl);
      })
      .catch((error) => {});
  };
  return (
    <div>
      <Container className="p-5 mt-5">
        <h2 className="p-3 mb-3">Please log in</h2>
        <Row>
          <Col className="background-color">
            {!toggle && (
              <>
                <h4 className="login-email">Name: </h4>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  onBlur={handleName}
                />
                <br />
              </>
            )}

            <h4 className="login-email">Email: </h4>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onBlur={hanldeEmail}
            />
            <br />
            <h4 className="login-email">Password: </h4>
            <Form.Control
              type="password"
              placeholder="Enter Yourpassword"
              onBlur={hanldePassword}
            />
            <br />

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" onChange={toggleLogin} />
              <span>click here for register</span>
            </Form.Group>

            {!toggle && (
              <div className="d-grid gap-2 mb-3">
                <Button variant="primary" size="lg" onClick={handleRegister}>
                  Register
                </Button>
              </div>
            )}
            <div className="d-grid gap-2 mb-3">
              <Button variant="dark" size="lg" onClick={handleLogin}>
                Log In
              </Button>
            </div>
            <div>
              <Button
                variant="warning"
                className="me-5"
                className="google-button"
                onClick={googleSignIn}
              >
                Google Sign In
              </Button>
              <Button
                variant="danger"
                className="github-button"
                onClick={handleGithubSignIn}
              >
                Github Sign In
              </Button>
            </div>
          </Col>
          <Col className="contactimg">
            <Image src={contact} alt="" fluid />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
