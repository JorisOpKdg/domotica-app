import React from "react";
import { useRoomsAndFloor } from "./../../hooks/customHooks";
import RoomSummaryList from "./RoomSummaryList";
import RoomsViewNavbar from "./../layout/RoomsViewNavbar";

// voorbeeld van destructuring vd parameter floorId
const RoomsList = (props) => {
  const { floorId } = props.match.params;

  // maakt gebruik van custom hook useRoomsAndFloor voor het ophalen van floor en rooms data
  const { rooms, floor } = useRoomsAndFloor(floorId);

  if (!(rooms && floor)) return null;

  return (
    <div className="container">
      <RoomsViewNavbar floorId={floor.id} floorName={floor.floorName} />

      <div className="row">
        {rooms.map((room) => (
          <RoomSummaryList absolutePosition={false} key={room.id} floorId={floor.id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default RoomsList;

/*
<div class="spinner-border" role="status">
  <span class="sr-only">Loading...</span>
</div>
*/
