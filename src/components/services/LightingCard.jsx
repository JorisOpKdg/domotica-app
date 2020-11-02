import React, { useEffect, useState } from "react";
import { getSchemes } from "../api/callSchemes";
import ServiceScheme from "./schemes/ServiceScheme";
import { Link } from "react-router-dom";
import { deleteScheme } from "./../api/callSchemes";
import { putRoom } from "./../api/callRooms";

const LightingCard = (props) => {
  const min = 0;
  const max = 30;
  const service = "lighting";
  const [schemes, setSchemes] = useState();
  const [room, setRoom] = useState(props.room);

  useEffect(() => {
    getSchemes(room.id, "lighting").then((nextSchemes) =>
      setSchemes(nextSchemes)
    );
  }, [room.id]);

  const lightingHandler = (e) => {
    setRoom((previousRoom) => ({
      ...previousRoom,
      lighting: e.target.value,
    }));

    putRoom(room, room.id).then();
  };

  const deleteHandler = async () => {
    await deleteScheme(props.scheme.id);
  };

  return (
    <div className="col-lg-6">
      <div className="card mb-3 shadow-sm">
        <div className="card-header pl-5 pt-3">
          <div className="row">
            <div className="col-8">
              <h2 className="my-0 font-weight-normal">Verlichting:</h2>
            </div>
            <div className="col-4">
              <h2 className="text-right pr-4 ">{room.lighting}</h2>
            </div>
          </div>
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item py-2">
              <div className="row">
                <form className="m-3 col-11">
                  <input
                    type="range"
                    className="custom-range"
                    min={min}
                    max={max}
                    onChange={lightingHandler}
                    value={room.lighting}
                    id="lightingRange"
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
                    to={`/new-smart-scheme?roomId=${room.id}&service=lighting`}
                    roomId={room.id}
                    service={service}
                    deleteHandler={deleteHandler}
                  >
                    Nieuw
                  </Link>
                </div>
              </div>
            </li>
            {schemes &&
              schemes.map((scheme) => <ServiceScheme scheme={scheme} />)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LightingCard;
