import React from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ServiceCardNewScheme = ({ roomId, service }) => {
  return (
    <li className="list-group-item py-4">
      <Row>
        <Col xs={8}>
          <h5 className="card-title pl-3 pt-2">Slim schema</h5>
        </Col>
        <Col xs={4}>
          <Link
            className="btn btn-dark float-right mr-3"
            to={`/new-service-scheme?roomId=${roomId}&service=${service}`}
          >
            Nieuw
          </Link>
        </Col>
      </Row>
    </li>
  );
};

export default ServiceCardNewScheme;
