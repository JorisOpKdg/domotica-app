import React from "react";
import { useRoomsAndFloor } from "./../../hooks/customHooks";
import RoomSummaryCard from "./RoomSummaryCard";
import RoomsViewNavbar from "./../layout/RoomsViewNavbar";

// voorbeeld van destructuring vd parameter floorId
const RoomsList = ({
  match: {
    params: { floorId },
  },
}) => {
  // maakt gebruik van custom hook useRoomsAndFloor voor het ophalen van floor en rooms data
  const { rooms, floor } = useRoomsAndFloor(floorId);

  return (
    <div className="container">
      {floor !== undefined ? (
        <RoomsViewNavbar floorId={floor.id} floorName={floor.floorName} />
      ) : null}

      <div className="row">
        {rooms !== undefined && floor !== undefined
          ? rooms.map((room) => (
              <RoomSummaryCard key={room.id} floorId={floor.id} room={room} />
            ))
          : null}
      </div>
    </div>
  );
};

export default RoomsList;
