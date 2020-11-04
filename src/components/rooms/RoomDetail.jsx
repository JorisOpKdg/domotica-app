import React, { useState, useEffect } from "react";
import Temperature from "../services/Temperature";
import Lighting from "../services/Lighting";
import Music from "../services/Music";
import Curtains from "../services/Curtains";
import { getRoom } from "./../../api/callRooms";

const RoomDetail = (props) => {
  const roomId = props.match.params.roomId;
  const [room, setRoom] = useState({});

  useEffect(() => {
    getRoom(roomId).then((nextRoom) => setRoom(nextRoom));
  }, [roomId]);

  return (
    <div className="container mt-5">
      <h1 className="display-4">{room && room.name}</h1>
      <p className="mb-5">{room && room.description}</p>

      <div className="row mb-5">
        {room.temperature !== undefined ? (
          <Temperature room={room} service="temperature" />
        ) : null}
        {room.lighting !== undefined ? (
          <Lighting room={room} service="lighting" />
        ) : null}
        {room.music !== undefined ? (
          <Music room={room} service="music" />
        ) : null}
        {room.curtains !== undefined ? (
          <Curtains room={room} service="curtains" />
        ) : null}
      </div>
    </div>
  );
};

export default RoomDetail;
