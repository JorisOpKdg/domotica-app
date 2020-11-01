import React, { useEffect, useState } from "react";
import RoomSummary from "./RoomSummary";
import RoomsViewNavbar from "./../layout/RoomsViewNavbar";
import axios from "axios";
import { DB_URL } from "../../database/db";
import kelder from "./../../assets/images/bg-kelder.jpeg";

const RoomsMap = ({
  match: {
    params: { floorId },
  },
}) => {
  const [state, setState] = useState({ floorId, rooms: [] });

  useEffect(() => {
    axios
      .get(`${DB_URL}/rooms?floorid=${floorId}`)
      .then((response) => {
        setState((prevState) => ({ ...prevState, rooms: response.data }));
      })
      .then(() => axios.get(`${DB_URL}/floors/${floorId}`))
      .then((response) => {
        setState((prevState) => ({
          ...prevState,
          floorName: response.data.name,
        }));
      });
  }, [floorId]);
  return (
    <div className="container" styles={{ backgroundImage: `url(${kelder})` }}>
      <RoomsViewNavbar floorId={state.floorId} floorName={state.floorName} />
      <div className="row">
        {state.rooms &&
          state.floorId &&
          state.rooms.map((room) => (
            <RoomSummary floorId={state.floorId} room={room} />
          ))}
      </div>
    </div>
  );
};

export default RoomsMap;
