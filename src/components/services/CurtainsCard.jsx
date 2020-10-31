import React, { useEffect, useState } from "react";
import axios from "axios";
import { DB_URL } from "../../database/db";
import SmartScheme from "./SmartScheme";

const CurtainsCard = (props) => {
  const [schemes, setSchemes] = useState();
  const [room, setRoom] = useState(props.room);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${DB_URL}/schemes?roomId=${props.roomId}&service=temperature`
        );
        setSchemes(response.data);
      } catch (error) {
        console.error("Could not load rooms:" + error);
      }
    };
    fetchData();
  }, [props.roomId]);

  const curtainHandler = (e) => {
    setRoom(previousRoom => ( {...previousRoom, curtains: !previousRoom.curtains }));
  };

  return (
    <div className="col-lg-6">
      <div className="card mb-3 shadow-sm">
        <div className="card-header pl-5 pt-3">
          <div className="row">
            <div className="col-8">
              <h2 className="my-0 font-weight-normal">Gordijnen</h2>
            </div>
            <div className="col-4">
              <h2 className="text-right pr-4 ">
                {room.curtains ? "Open" : "Dicht"}
              </h2>
            </div>
          </div>
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item py-4">
              <form className="form-right my-2 my-lg-0 col-12">
                <div className="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="curtainSwitch"
                    onClick={curtainHandler}
                  />
                  <label className="custom-control-label" for="curtainSwitch">
                    Aan/Uit
                  </label>
                </div>
              </form>
            </li>
            <li className="list-group-item py-4">
              <div className="row">
                <div className="col-8">
                  <h5 className="card-title pl-3 pt-2">Slim schema</h5>
                </div>
                <div className="col-4">
                  <button className="btn btn-primary float-right mr-3">
                    Nieuw
                  </button>
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

export default CurtainsCard;
