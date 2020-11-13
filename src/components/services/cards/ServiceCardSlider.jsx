import React from "react";
import RangeSlider from "react-bootstrap-range-slider";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ServiceCardSlider = ({ min, max, changeHandler, afterChangeHandler, value }) => {
  return (
    <li className="list-group-item py-2">
      <Row>
        <Col xs={11} className="m-3">
          <RangeSlider
            value={value}
            min={min}
            max={max}
            onChange={changeHandler}
            onAfterChange={afterChangeHandler}
          />
        </Col>
      </Row>
    </li>
  );
};

export default ServiceCardSlider;
