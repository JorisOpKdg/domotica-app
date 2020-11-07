import React, { useState, useEffect, useContext } from "react";
import Temperature from "../services/Temperature";
import Lighting from "../services/Lighting";
import Music from "../services/Music";
import Curtains from "../services/Curtains";
import { getRoom } from "./../../api/callRooms";
import { RoomContext } from "./../../contexts/RoomContext";

const RoomDetail = (props) => {
  const roomId = props.match.params.roomId;
  const { room, getRoom } = useContext(RoomContext);

  useEffect(() => {
    setRoom(getRoom(roomId));
  }, [roomId]);

  return (
    <div className="container mt-5">
      <h1 className="display-4">{room && room.name}</h1>
      <p className="mb-5">{room && room.description}</p>

      <div className="row mb-5">
        {room.temperature !== undefined ? (
          <Temperature service="temperature" />
        ) : null}

        {room.lighting !== undefined ? <Lighting service="lighting" /> : null}

        {room.music !== undefined ? <Music service="music" /> : null}

        {room.curtains !== undefined ? <Curtains service="curtains" /> : null}
      </div>
    </div>
  );
};

export default RoomDetail;
