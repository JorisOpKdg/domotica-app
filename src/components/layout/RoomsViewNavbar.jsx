import React from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { roomsListRouteShort, roomsMapRouteShort } from "../../routes";

const RoomsViewNavbar = ({ floorId, floorName }) => {
  return (
    <Row className="mt-5 pb-3">
      <Col>
        <h1 className="display-4">{floorName}</h1>
      </Col>
      <Col sm={12} md={"auto"} className="float-md-right">
        <Link
          key="list-view"
          className="mr-3 mt-3 btn btn-lg btn-outline-dark"
          to={`${roomsListRouteShort}${floorId}`}
        >
          List
        </Link>
        <Link
          key="map-view"
          className="mt-3 btn btn-lg btn-outline-dark"
          to={`${roomsMapRouteShort}${floorId}`}
        >
          Map
        </Link>
      </Col>
    </Row>
  );
};

export default RoomsViewNavbar;
