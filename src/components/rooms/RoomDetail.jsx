import React, { useState, useEffect } from "react";
import TemperatureCard from "../services/TemperatureCard";
import LightingCard from "./../services/LightingCard";
import MusicCard from "./../services/MusicCard";
import CurtainsCard from "../services/CurtainsCard";
import { getRoom } from "../api/callRooms";

const RoomDetail = (props) => {
  const roomId = props.match.params.roomId
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
          <TemperatureCard room={room} />
        ) : null}
        {room.lighting !== undefined ? <LightingCard room={room} /> : null}
        {room.music !== undefined ? <MusicCard room={room} /> : null}
        {room.curtains !== undefined ? <CurtainsCard room={room} /> : null}
      </div>
    </div>
  );
};

export default RoomDetail;
