import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const ServiceCard = ({ children }) => {
  return (
    <Col lg={6}>
      <Card className="mb-3 shadow-sm">{children}</Card>
    </Col>
  );
};

export default ServiceCard;
