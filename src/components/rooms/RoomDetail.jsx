import React, { useState, useEffect } from "react";
import TemperatureCard from "../services/TemperatureCard";
import LightingCard from "./../services/LightingCard";
import MusicCard from "./../services/MusicCard";
import CurtainsCard from "../services/CurtainsCard";
import { getRoom } from "../api/callRooms";

const RoomDetail = (props) => {
  const [room, setRoom] = useState({});

  useEffect(() => {
    getRoom(props.match.params.roomId).then((nextRoom) => setRoom(nextRoom));
  });

  return (
    <div className="container mt-5">
      <h1 className="display-4">{room && room.name}</h1>
      <p className="mb-5">{room && room.description}</p>

      <div className="row mb-5">
        {room.temperature && <TemperatureCard room={room} />}
        {room.lighting && <LightingCard room={room} />}
        {room.music && <MusicCard room={room} />}
        {room.curtains && <CurtainsCard room={room} />}
      </div>
    </div>
  );
};

export default RoomDetail;

