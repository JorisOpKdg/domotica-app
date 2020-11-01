import React from "react";
import { Link } from "react-router-dom";

const RoomsViewNavbar = (props) => {
  return (
    <div className="px-3 py-3 row">
      <div className="col-md-8">
        <h1 className="display-4">{props.floorName}</h1>
      </div>
      <div className="col-md-4">
        <Link
          key="list-view"
          className="mr-3 mt-3 btn btn-lg btn-outline-primary"
          to={`/rooms-list/${props.floorId}`}
        >
          List
        </Link>
        <Link
          key="map-view"
          className="mt-3 btn btn-lg btn-outline-secondary"
          to={`/rooms-map/${props.floorId}`}
        >
          Map
        </Link>
      </div>
    </div>
  );
};

export default RoomsViewNavbar;
