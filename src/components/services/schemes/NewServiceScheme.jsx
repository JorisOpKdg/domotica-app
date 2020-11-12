import React, { useState, useEffect, useContext } from "react";
import * as QueryString from "query-string";
import { useHistory } from "react-router-dom";
import FormElement from "./FormElement";
import { SchemeContext } from "./../../../contexts/SchemeContext";
import { getConfigInfo, createTitle } from "./../serviceUtilities";
import Spinner from 'react-bootstrap/Spinner'

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
    <div className="container">
      <h1 className="mt-5">{createTitle(scheme.service)}</h1>
      <h2 className="mb-5">Maak een nieuw slim schema</h2>
      <form onSubmit={submitHandler}>
        <div className="form-row">
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
        </div>
        <div className="form-row">
          <div className="form-group ml-1">
            <button type="submit" className="btn btn-dark">
              Opslaan
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewServiceScheme;
