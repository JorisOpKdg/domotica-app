import React, { useContext, useState, useEffect } from "react";
import RoomSummaryList from "./RoomSummaryList";
import RoomsViewNavbar from "./../layout/RoomsViewNavbar";
import { FloorContext } from "./../../contexts/FloorContext";
import { RoomContext } from "./../../contexts/RoomContext";

const RoomsList = (props) => {
  const { floorId } = props.match.params;
  const { readRoomsOfFloor } = useContext(RoomContext);
  const { readFloor } = useContext(FloorContext);

  const [RoomsOfFloor, setRoomsOfFloor] = useState([]);
  const [floor, setFloor] = useState();

  useEffect(() => {
    setRoomsOfFloor(readRoomsOfFloor(floorId));
    setFloor(readFloor(floorId));
  }, [floorId, readFloor, readRoomsOfFloor]);

  if (!(RoomsOfFloor && floor)) return null;

  return (
    <div className="container">
      <RoomsViewNavbar floorId={floor.id} floorName={floor.floorName} />

      <div className="row">
        {RoomsOfFloor.map((room) => (
          <RoomSummaryList
            absolutePosition={false}
            key={room.id}
            floorId={floor.id}
            room={room}
          />
        ))}
      </div>
    </div>
  );
};

export default RoomsList;
