import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

const FormElement = ({ title, changeHandler, optionValues, value, type }) => {
  return (
    <Col md={4}>
      <Form.Group className="pr-3">
        <Form.Label className="mr-3 " htmlFor={type}>
          {title}
        </Form.Label>
        <Form.Control
          as="select"
          className="mr-5"
          controlId={type}
          name={type}
          onChange={changeHandler}
          value={value}
          required
        >
          {optionValues &&
            optionValues.map((value) => <option key={value}>{value}</option>)}
        </Form.Control>
      </Form.Group>
    </Col>
  );
};

export default FormElement;
