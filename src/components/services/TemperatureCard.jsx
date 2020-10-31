import React, { useEffect, useState } from "react";
import { getSchemes } from "../api/callSchemes";
import { postRoom } from "../api/callRooms";
import SmartScheme from "./SmartScheme";

const TemperatureCard = (props) => {
  const [schemes, setSchemes] = useState();
  const [room, setRoom] = useState(props.room);

  useEffect(() => {
    const loadData = async () => {
      setSchemes(await getSchemes(room.id, room.service));
    };
    loadData();
  }, [room.id, room.service]);

  const desiredTempHandler = (e) => {
    setRoom({ desiredTemp: e.target.value });

    const loadData = async () => {
      await postRoom(room.id);
    };
    loadData();
  };

  console.log(schemes);
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
                    min="0"
                    max="30"
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
                  <a className="btn btn-primary float-right mr-3" href="#">
                    Nieuw
                  </a>
                </div>
              </div>
            </li>
            {schemes &&
              schemes.map((scheme) => <SmartScheme scheme={scheme} />)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TemperatureCard;
