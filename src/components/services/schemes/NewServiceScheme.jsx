import React, { useState, useEffect } from "react";
import { postScheme } from "../../../api/callSchemes";
import * as QueryString from "query-string";
import { useHistory } from "react-router-dom";
import { getRoom } from "../../../api/callRooms";
import { createValues, createTitle, getMinMax, getHours } from "../../utilities";

const NewServiceScheme = (props) => {
  const params = QueryString.parse(props.location.search);
  const history = useHistory();

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
    const minmax = getMinMax(scheme.service);
    const hours = getHours;
    let values;

    if (minmax !== null) {
      values = createValues(minmax[0], minmax[1]);
    } else {
      values = ["Open", "Dicht"];
    }
    setConfigInfo({ hours, values });
  }, [scheme.service]);

  const valueHandler = (e) => {
    setScheme({ ...scheme, amount: e.target.value });
  };

  const startHandler = (e) => {
    setScheme({ ...scheme, start: e.target.value });
  };

  const endHandler = (e) => {
    setScheme({ ...scheme, end: e.target.value });
  };

  const submitHandler = () => {
    postScheme(scheme);
    let floorid;
    getRoom(scheme.roomId).then((room) => (floorid = room.floorid));
    history.push(`/room-detail/${floorid}/${scheme.roomid}`);
  };

  return (
    <div className="container">
      <h1 className="mt-5">{scheme && createTitle(scheme.service)}</h1>
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
              onChange={startHandler}
              value={scheme.start}
            >
              {configInfo.hours &&
                configInfo.hours.map((hour) => <option>{hour}</option>)}
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
              onChange={endHandler}
              value={scheme.end}
            >
              {configInfo.hours &&
                configInfo.hours.map((hour) => <option>{hour}</option>)}
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
              onChange={valueHandler}
              value={scheme.amount}
            >
              {configInfo.values &&
                configInfo.values.map((value) => (
                  <option key={value}>{value}</option>
                ))}
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
    </div>
  );
};

export default NewServiceScheme;
