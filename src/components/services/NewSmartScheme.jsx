import React, { useState, useEffect, useMemo } from "react";
import { postScheme, getConfigInfo } from "../api/callSchemes";
import * as QueryString from "query-string";
import { useHistory } from "react-router-dom";
import { getRoom } from "../api/callRooms";

const createValues = (min, max) => {
  let values = [];
  for (let i = 0; i < 20; i++) {
    values.push(i.toString());
  }
  return values;
};

const NewSmartScheme = (props) => {
  const params = QueryString.parse(props.location.search);
  const history = useHistory();

  const [configInfo, setConfigInfo] = useState([]);
  const [scheme, setScheme] = useState({
    roomId: params.roomId,
    service: params.service,
    amount: 0,
    start: "",
    end: "",
  });

  const values = useMemo(() => {
    let min;
    let max;

    switch (scheme.service) {
      case "temperature":
        min = configInfo.minmax.temperature.min;
        max = configInfo.minmax.temperature.max;
        break;
      case "music":
        min = configInfo.minmax.music.min;
        max = configInfo.minmax.music.max;
        break;
      case "lighting":
        min = configInfo.minmax.lighting.min;
        max = configInfo.minmax.lighting.max;
        break;
      default:
        min = null;
        max = null;
    }
    if (min !== null && max != null) {
      createValues(min, max);
    }
  }, [
    configInfo.minmax.lighting.max,
    configInfo.minmax.lighting.min,
    configInfo.minmax.music.max,
    configInfo.minmax.music.min,
    configInfo.minmax.temperature.max,
    configInfo.minmax.temperature.min,
    scheme.service,
  ]);

  useEffect(() => {
    getConfigInfo().then((configInfo) => setConfigInfo(configInfo));
  }, []);

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

  const valueHandler = (e) => {
    setScheme({ ...scheme, amount: +e.target.value });
  };

  const startHandler = (e) => {
    setScheme({ ...scheme, start: e.target.value });
  };

  const endHandler = (e) => {
    setScheme({ ...scheme, end: e.target.value });
  };

  const submitHandler = () => {
    postScheme(scheme);
    let floorId;
    getRoom(scheme.roomId).then((room) => (floorId = room.floorId));
    history.push(`/room-detail/${floorId}/${scheme.roomId}`);
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
              {values &&
                values.map((value) => <option key={value}>{value}</option>)}
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

export default NewSmartScheme;
