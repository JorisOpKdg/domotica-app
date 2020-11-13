import React from "react";
import RangeSlider from "react-bootstrap-range-slider";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const RoomsListSlider = ({
  fontSize,
  title,
  value,
  changeHandler,
  changeAfterHandler,
  min,
  max,
}) => {
  return (
    <Row className="m-2">
      <Col xs={3}>
        <h4 style={{ fontSize: `${fontSize}px` }}>{title}</h4>
      </Col>
      <Col xs={9}>
        <RangeSlider
          value={value}
          min={+min}
          max={+max}
          onChange={changeHandler}
          onAfterChange={changeAfterHandler}
        />
      </Col>
    </Row>
  );
};

export default RoomsListSlider;
