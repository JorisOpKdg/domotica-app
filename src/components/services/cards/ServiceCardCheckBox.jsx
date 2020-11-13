import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

const ServiceCardCheckBox = ({ changeHandler, checkedValue }) => {
  return (
    <li className="list-group-item py-4">
      <Col className="my-2 my-lg-0">
        <Form.Check
          className="mt-2"
          type="switch"
          id="curtainSwitch"
          onChange={changeHandler}
          checked={checkedValue}
          label="Dicht/Open"
        />
      </Col>
    </li>
  );
};

export default ServiceCardCheckBox;
