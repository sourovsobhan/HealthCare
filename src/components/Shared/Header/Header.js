import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Header.css";

import useAuth from "./../../../Hook/useFirebase/useAuth";

const Header = () => {
  const { handleLogOUt, user } = useAuth();
  console.log(user);
  return (
    <div>
      <>
        <Navbar
          bg="dark"
          variant="dark"
          collapseOnSelect
          expand="lg"
          className="fixed-top"
        >
          <Container>
            <Navbar.Brand href="#home">
              Health<span className="text-warning">Care</span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Link to="/home">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/doctor">Doctor</Link>
              {user?.email ? (
                <>
                  <Button variant="danger" onClick={handleLogOUt}>
                    Log-out
                  </Button>

                  <Navbar.Text>
                    Signed in as: <span>{user.displayName}</span>
                  </Navbar.Text>
                </>
              ) : (
                <>
                  <Link to="/login">Login</Link>
                </>
              )}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </div>
  );
};

export default Header;
