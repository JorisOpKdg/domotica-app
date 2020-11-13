import React, { useState, useEffect, useContext, useParams } from "react";
import { useHistory } from "react-router-dom";
import FormElement from "./FormElement";
import { SchemeContext } from "./../../../contexts/SchemeContext";
import { getConfigInfo, createTitle } from "./../serviceUtilities";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const EditServiceScheme = () => {
  const { schemeId } = useParams();
  const history = useHistory();
  const { readScheme, updateScheme } = useContext(SchemeContext);

  const [scheme, setScheme] = useState();
  const [configInfo, setConfigInfo] = useState();

  useEffect(() => {
    const newScheme = readScheme(schemeId);
    setScheme(newScheme);
    setConfigInfo(getConfigInfo(newScheme.service));
  }, [readScheme, schemeId]);

  const valueHandler = (e) => {
    setScheme({ ...scheme, amount: e.target.value });
  };

  const startHandler = (e) => {
    setScheme({ ...scheme, start: e.target.value });
  };

  const endHandler = (e) => {
    setScheme({ ...scheme, end: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    updateScheme(scheme).then(history.push(`/room-detail/${scheme.roomId}`));
  };

  if (!(scheme && configInfo))
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );

  return (
    <Container>
      <h1 className="mt-5">{createTitle(scheme.service)}</h1>
      <h2 className="mb-5">Pas je slim schema aan</h2>
      <Form onSubmit={submitHandler}>
        <Form.Row>
          <FormElement
            title="Start:"
            changeHandler={startHandler}
            optionValues={configInfo.hours}
            value={scheme.start}
            type="start"
          />
          <FormElement
            title="Einde:"
            changeHandler={endHandler}
            optionValues={configInfo.hours}
            value={scheme.end}
            type="end"
          />
          <FormElement
            title="Hoeveelheid:"
            changeHandler={valueHandler}
            optionValues={configInfo.values}
            value={scheme.amount}
            type="amount"
          />
        </Form.Row>
        <Form.Row>
          <Form.Group className="ml-1">
            <Button variant="dark" type="submit">
              Opslaan
            </Button>
          </Form.Group>
        </Form.Row>
      </Form>
    </Container>
  );
};

export default EditServiceScheme;
