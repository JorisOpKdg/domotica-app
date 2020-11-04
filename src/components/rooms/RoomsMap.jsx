import React from "react";
import RoomSummaryCard from "./RoomSummaryCard";
import RoomsViewNavbar from "./../layout/RoomsViewNavbar";
import { useRoomsAndFloor } from "./../../hooks/customHooks";
import { getBackgroundImage } from "./roomUtilities";

const RoomsMap = (props) => {
  const floorId = props.match.params;

  // maakt gebruik van custom hook useRoomsAndFloor voor het ophalen van floor en rooms data.
  const { rooms, floor } = useRoomsAndFloor(floorId);

  return (
    <div className="container">
      {floor !== undefined ? (
        <RoomsViewNavbar floorId={floor.id} floorName={floor.floorName} />
      ) : null}

      <div
        className="row"
        styles={{
          width: "100%",
          height: "400px",
          backgroundImage: getBackgroundImage(floor.id),
        }}
      >
        {floor !== undefined
          ? rooms.map((room) => (
              <RoomSummaryCard key={room.id} floorId={floor.id} room={room} />
            ))
          : null}
      </div>
    </div>
  );
};

export default RoomsMap;
