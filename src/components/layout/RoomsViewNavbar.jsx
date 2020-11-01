import React from "react";
import { Link } from "react-router-dom";

const RoomsViewNavbar = (props) => {
  return (
    <div className="mt-5 pb-3 row">
      <div className="col">
        <h1 className="display-4">{props.floorName}</h1>
      </div>
      <div className="col ml-auto ">
        <div className="float-right">
        <Link
          key="list-view"
          className="mr-3 mt-3 btn btn-lg btn-outline-dark"
          to={`/rooms-list/${props.floorId}`}
        >
          List
        </Link>
        <Link
          key="map-view"
          className="mt-3 btn btn-lg btn-outline-dark"
          to={`/rooms-map/${props.floorId}`}
        >
          Map
        </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomsViewNavbar;
