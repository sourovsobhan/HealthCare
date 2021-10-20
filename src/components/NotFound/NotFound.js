import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./NotFound.css";
const NotFound = () => {
  return (
    <div className="my-5 p-5 notfound">
      <h1>Page is not Found:404 error</h1>
      <Link to="/home">
        <Button variant="warning">Back</Button>
      </Link>
    </div>
  );
};

export default NotFound;
