import React, { useState, useEffect, useContext } from "react";
import * as QueryString from "query-string";
import { useHistory } from "react-router-dom";
import FormElement from "./FormElement";
import { SchemeContext } from "./../../../contexts/SchemeContext";
import {
  getMinMax,
  getHours,
  createValues,
  createTitle,
} from "./../serviceUtilities";

const NewServiceScheme = ({ location }) => {
  const history = useHistory();
  const params = QueryString.parse(location.search);
  const { createScheme } = useContext(SchemeContext);

  const [configInfo, setConfigInfo] = useState({
    hours: [],
    values: [],
  });

  const [scheme, setScheme] = useState({
    roomId: params.roomId,
    service: params.service,
    amount: 0,
    start: "",
    end: "",
  });

  useEffect(() => {
    console.log("Service in UseEffect: " + params.service)
    const minmax = getMinMax(params.service);
    console.log("minmax: " + minmax);
    const hours = getHours;
    let values;

    if (minmax !== null) {
      values = createValues(minmax.min, minmax.max);
    } else {
      values = ["Open", "Dicht"];
    }
    console.log("values: " + values);
    setConfigInfo({ hours, values });
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

  return (
    <div className="container">
      <h1 className="mt-5">{scheme && createTitle(params.service)}</h1>
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
