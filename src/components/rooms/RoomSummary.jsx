import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MusicOff from "./../../assets/images/music-off.png";
import MusicOn from "./../../assets/images/music-on.png";

const RoomSummary = ({ room, floorId }) => {
  /*
  const [backgroundColor, setBackgroundColor] = useState(
    "rgba(255, 165, 0, 0.8"
  );

  useEffect(() => {
    backgroundHandler();
  });

  const backgroundHandler = () => {
    const alfa = room.lightning * 2;
    const color = `rgba(255, 165, 0,${alfa}`;
    setBackgroundColor({ backgroundColor: color });
  };
  style={{background-color: "rgba(255, 165, 0, 0.5"}}
  */

  return (
    <div className="col-md-6 col-lg-3">
      <div className="card bg-warning mb-3 shadow-sm">
        <div className="card-body ">
          <h4 className="">{room.name}</h4>

          <h3>{room.temperature}°</h3>
          <img
            src={+room.music < 1 ? MusicOff : MusicOn}
            alt="Music icon"
          ></img>
          <Link
            className="btn btn-lg btn-block btn-secondary mt-3"
            to={`/room-detail/${floorId}/${room.id}`}
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomSummary;

/*
div className="card bg-warning mb-3 shadow-sm">
        <div className="card-header">
          <h4 className="my-0 font-weight-normal">{room.name}</h4>
        </div>
        <div className="card-body ">
          <ul className="list-unstyled mt-3 mb-4">
            <li>Temperatuur: {room.temperature}</li>
            <li>Verlichting: {room.lightning}</li>
            <li>Muziek: {room.music}</li>
            <li>{`Gordijnen: ${room.curtains ? "Open" : "Gesloten"}`}</li>
          </ul>
          <Link
            className="btn btn-lg btn-block btn-outline-primary"
            to={`/room-detail/${floorId}/${room.id}`}
          >
            Details
          </Link>
        </div>*/
