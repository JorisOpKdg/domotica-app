import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ServiceCardHeader = ({ title, value }) => {
  return (
    <Card.Header className="pl-5 pt-3">
      <Row>
        <Col xs={8}>
          <h2 className="my-0 font-weight-normal">{title}</h2>
        </Col>
        <Col xs={4}>
          <h2 className="text-right pr-4 ">{value}</h2>
        </Col>
      </Row>
    </Card.Header>
  );
};

export default ServiceCardHeader;
