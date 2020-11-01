import React, { useState, useEffect } from "react";
import { postScheme } from "../api/callSchemes";
import { getHours } from "../api/callHours";
import * as QueryString from "query-string";

const NewSmartScheme = (props) => {
  const params = QueryString.parse(props.location.search);
  const [values, setValues] = useState([]);
  const [hours, setHours] = useState([]);
  const [scheme, setScheme] = useState({
    roomId: params.roomId,
    service: params.service,
    amount: 0,
    start: "",
    end: "",
  });

  useEffect(() => {
    getHours().then((nextHours) => setHours(nextHours));
    setValues(createValues());
  }, []);

  const createValues = () => {
    const min = props.min;
    const max = props.max;
    let values = [];
    for (let i = min; i < max; i++) {
      values.push(i.toString);
    }
    return values;
  };

  const createTitle = () => {
    let title;
    switch (scheme.service) {
      case "temperature":
        title = "Temperatuur";
        break;
      case "music":
        title = "Muziek";
        break;
      case "lighting":
        title = "Verlichting";
        break;
      case "curtains":
        title = "Gordijnen";
        break;
      default:
        title = "Titel is ongekend";
    }
    return title;
  };

  const onChange = (e, { name, value }) =>
    setScheme({ ...scheme, [name]: value });

  const submitHandler = () => {
    postScheme(scheme);
  };

  return (
    <div className="container">
      <h1 className="mt-5">{scheme && createTitle()}</h1>
      <h2 className="mb-5">Maak een nieuw slim schema</h2>
      <form onSubmit={submitHandler}>
        <div className="form-row">
          <div className="form-group col-md-4 pr-3">
            <label className="mr-3 " htmlFor="start">
              Start:
            </label>
            <select
              className="form-control mr-5"
              id="start"
              name="start"
              onChange={onChange}
              value={scheme.start}
            >
              {hours && hours.map((hour) => <option>{hour}</option>)}
            </select>
          </div>
          <div className="form-group col-md-4 pr-3">
            <label className="mr-3 " htmlFor="end">
              Eind:
            </label>
            <select
              className="form-control"
              id="end"
              name="end"
              onChange={onChange}
              value={scheme.end}
            >
              {hours && hours.map((hour) => <option>{hour}</option>)}
            </select>
          </div>

          <div className="form-group col-md-4 pr-3">
            <label className="mr-3 " htmlFor="amount">
              Hoeveelheid:
            </label>
            <select
              className="form-control"
              id="amount"
              name="amount"
              onChange={onChange}
              value={scheme.amount}
            >
              {values && values.map((value) => <option>{value}</option>)}
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group ml-1">
            <button type="submit" className="btn btn-dark">
              Opslaan
            </button>
          </div>
        </div>
      </form>
      {values && values.map((value) => <p>value</p>)}
    </div>
  );
};

export default NewSmartScheme;
