import React, { useEffect, useState } from "react";
import { getSchemes } from "../api/callSchemes";
import SmartScheme from "./SmartScheme";

const TemperatureCard = (props) => {
  const [schemes, setSchemes] = useState();

  useEffect(() => {
    const loadData = async () => {
      setSchemes(await getSchemes(props.room.roomId, props.room.service));
    };
    loadData();
  }, [props.room.roomId, props.room.service]);

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
              <h2 className="text-right pr-4 ">{props.room.temperature}°</h2>
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
                  <h3 className="text-right pr-2">20°</h3>
                </div>
                <form className="m-3 col-11">
                  <input
                    type="range"
                    className="custom-range"
                    min="0"
                    max="30"
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