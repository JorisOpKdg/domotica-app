import React, { useState, useEffect, useContext } from "react";
import * as QueryString from "query-string";
import { useHistory } from "react-router-dom";
import FormElement from "./FormElement";
import { SchemeContext } from "./../../../contexts/SchemeContext";
import { getConfigInfo, createTitle } from "./../serviceUtilities";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const NewServiceScheme = ({ location }) => {
  const history = useHistory();
  const params = QueryString.parse(location.search);
  const { createScheme } = useContext(SchemeContext);

  const [configInfo, setConfigInfo] = useState();

  const [scheme, setScheme] = useState({
    roomId: params.roomId,
    service: params.service,
    amount: 0,
    start: "",
    end: "",
  });

  useEffect(() => {
    const newConfig = getConfigInfo(params.service);
    setConfigInfo(newConfig);
  }, [params.service]);

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
    createScheme(scheme).then(history.push(`/room-detail/${params.roomId}`));
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
      <h2 className="mb-5">Maak een nieuw slim schema</h2>
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

export default NewServiceScheme;
