import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import FormElement from "./FormElement";
import { SchemeContext } from "./../../../contexts/SchemeContext";
import { getConfigInfo, createTitle } from "./../serviceUtilities";

const EditServiceScheme = (props) => {
  const schemeId = props.match.params.schemeId;
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

  return (
    <div className="container">
      <h1 className="mt-5">{scheme && createTitle(scheme.service)}</h1>
      <h2 className="mb-5">Pas je slim schema aan</h2>
      <form onSubmit={submitHandler}>
        <div className="form-row">
          <FormElement
            title="Start:"
            changeHandler={startHandler}
            optionValues={configInfo && configInfo.hours}
            value={scheme && scheme.start}
            type="start"
          />
          <FormElement
            title="Einde:"
            changeHandler={endHandler}
            optionValues={configInfo && configInfo.hours}
            value={scheme && scheme.end}
            type="end"
          />
          <FormElement
            title="Hoeveelheid:"
            changeHandler={valueHandler}
            optionValues={configInfo && configInfo.values}
            value={scheme && scheme.amount}
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

export default EditServiceScheme;
