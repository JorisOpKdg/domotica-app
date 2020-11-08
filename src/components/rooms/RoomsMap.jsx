import React, { useContext, useState, useEffect } from "react";
import RoomSummaryMap from "./RoomSummaryMap";
import RoomsViewNavbar from "./../layout/RoomsViewNavbar";
import { getBackgroundImage } from "./roomUtilities";
import { RoomContext } from "./../../contexts/RoomContext";
import { FloorContext } from "./../../contexts/FloorContext";

const RoomsMap = (props) => {
  const floorId = props.match.params.floorId;
  const { readRoomsOfFloor } = useContext(RoomContext);
  const { readFloor } = useContext(FloorContext);

  const [RoomsOfFloor, setRoomsOfFloor] = useState([]);
  const [floor, setFloor] = useState();

  useEffect(() => {
    setRoomsOfFloor(readRoomsOfFloor(+floorId));
    setFloor(readFloor(+floorId));
  }, [floorId, readFloor, readRoomsOfFloor]);

  if (!(RoomsOfFloor && floor)) return null;

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
        {RoomsOfFloor.map((room) => (
          <RoomSummaryMap key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default RoomsMap;
