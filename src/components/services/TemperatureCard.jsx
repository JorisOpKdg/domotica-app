import React, { useEffect, useState } from "react";
import { getSchemes } from "../api/callSchemes";
import ServiceScheme from "./schemes/ServiceScheme";
import { Link } from "react-router-dom";

import { putRoom } from "./../api/callRooms";


const TemperatureCard = (props) => {
  const min = 0;
  const max = 30;
  const service = "temperature";
  const [schemes, setSchemes] = useState();
  const [room, setRoom] = useState(props.room);


  useEffect(() => {
    getSchemes(room.id, "temperature").then((nextSchemes) =>
      setSchemes(nextSchemes)
    );
  }, [room.id]);

  const desiredTempHandler = (e) => {
    setRoom((previousRoom) => ({
      ...previousRoom,
      desiredTemp: e.target.value,
    }));

    putRoom(room, room.id).then();
  };

  

  return (
    <div className="col-lg-6">
      <div className="card mb-3 shadow-sm">
        <div className="card-header pl-5 pt-3">
          <div className="row">
            <div className="col-8">
              <h2 className="my-0 font-weight-normal">Temperatuur:</h2>
            </div>
            <div className="col-4">
              <h2 className="text-right pr-4 ">{room.temperature}°</h2>
            </div>
          </div>
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item py-2">
              <div className="row">
                <div className="col-8">
                  <h5 className="card-title pl-3">Ingesteld op:</h5>
                </div>
                <div className="col-4 text-">
                  <h3 className="text-right pr-2">{room.desiredTemp}°</h3>
                </div>
                <form className="m-3 col-11">
                  <input
                    type="range"
                    className="custom-range"
                    min={min}
                    max={max}
                    onChange={desiredTempHandler}
                    value={room.desiredTemp}
                    id="temperatureRange"
                  ></input>
                </form>
              </div>
            </li>
            <li className="list-group-item py-4">
              <div className="row">
                <div className="col-8">
                  <h5 className="card-title pl-3 pt-2">Slim schema</h5>
                </div>
                <div className="col-4">
                  <Link
                    className="btn btn-dark float-right mr-3"
                    to={`/new-smart-scheme?roomId=${room.id}&service=temperature`}
                    room={room}
                    service={service}
                  >
                    Nieuw
                  </Link>
                </div>
              </div>
            </li>
            {schemes &&
              schemes.map((scheme) => (
                <ServiceScheme scheme={scheme} min={min} max={max} />
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TemperatureCard;
