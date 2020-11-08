import React, { useEffect, useContext, useState } from "react";
import Temperature from "../services/Temperature";
import Lighting from "../services/Lighting";
import Music from "../services/Music";
import Curtains from "../services/Curtains";
import { RoomContext } from "./../../contexts/RoomContext";
import SpinnerPage from "./../layout/SpinnerPage";

const RoomDetail = (props) => {
  const roomId  = props.match.params.roomId;
  const { readRoom } = useContext(RoomContext);
  const [room, setRoom] = useState();

  useEffect(() => {
    setRoom(readRoom(+roomId));
  }, [readRoom, roomId]);

  if (room === undefined) return <SpinnerPage />;

  return (
    <div className="container mt-5">
      <h1 className="display-4">{room && room.name}</h1>
      <p className="mb-5">{room && room.description}</p>

      <div className="row mb-5">
        {room.temperature !== undefined ? <Temperature room={room} /> : null}

        {room.lighting !== undefined ? <Lighting room={room} /> : null}

        {room.music !== undefined ? <Music room={room} /> : null}

        {room.curtains !== undefined ? <Curtains room={room} /> : null}
      </div>
    </div>
  );
};

export default RoomDetail;
