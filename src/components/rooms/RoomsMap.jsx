import React from "react";
import RoomSummaryMap from "./RoomSummaryMap";
import RoomsViewNavbar from "./../layout/RoomsViewNavbar";
import { useRoomsAndFloor } from "./../../hooks/customHooks";
import { getBackgroundImage } from "./roomUtilities";

const RoomsMap = (props) => {
  const { floorId } = props.match.params;

  const { rooms, floor } = useRoomsAndFloor(floorId);

  if (!(rooms && floor)) return null;

  return (
    <div className="container">
      <RoomsViewNavbar floorId={floor.id} floorName={floor.floorName} />

      <div
        style={{
          backgroundImage: getBackgroundImage(floor.id),
          backgroundSize: "1200px",
          height: "1400px",
          backgroundPosition: "left",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        {rooms.map((room) => (
          <RoomSummaryMap
            absolutePosition={true}
            key={room.id}
            floorId={floor.id}
            room={room}
          />
        ))}
      </div>
    </div>
  );
};

export default RoomsMap;
