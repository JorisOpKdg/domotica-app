import React from "react";
import Card from "react-bootstrap/Card";

const ServiceCardBody = ({ children }) => {
  return (
    <Card.Body>
      <ul className="list-group list-group-flush">{children}</ul>
    </Card.Body>
  );
};

export default ServiceCardBody;
