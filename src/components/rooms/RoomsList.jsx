import React, { useContext, useState, useEffect } from "react";
import RoomSummaryList from "./RoomSummaryList";
import RoomsViewNavbar from "./../layout/RoomsViewNavbar";
import { FloorContext } from "./../../contexts/FloorContext";
import { RoomContext } from "./../../contexts/RoomContext";

const RoomsList = (props) => {
  const floorId = props.match.params.floorId;
  const { readRoomsOfFloor } = useContext(RoomContext);
  const { readFloor } = useContext(FloorContext);

  const [roomsOfFloor, setRoomsOfFloor] = useState([]);
  const [floor, setFloor] = useState();

  useEffect(() => {
    setRoomsOfFloor(readRoomsOfFloor(+floorId));
    setFloor(readFloor(+floorId));
  }, [floorId, readFloor, readRoomsOfFloor]);

  if (!(roomsOfFloor && floor)) return null;

  return (
    <div className="container">
      <RoomsViewNavbar floorId={floor.id} floorName={floor.name} />

      <div className="row">
        {roomsOfFloor.map((room) => (
          <RoomSummaryList
            key={room.id}
            roomId={room.id}
          />
        ))}
      </div>
    </div>
  );
};

export default RoomsList;
