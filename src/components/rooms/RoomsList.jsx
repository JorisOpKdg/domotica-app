import React, { useEffect, useState } from "react";
import { getRooms } from "./../api/callRooms";
import { getFloor } from "./../api/callFloors";
import RoomSummary from "./RoomSummary";
import RoomsViewNavbar from "./../layout/RoomsViewNavbar";

const RoomsList = ({
  match: {
    params: { floorId },
  },
}) => {
  const [rooms, setRooms] = useState([]);
  const [floor, setFloor] = useState();

  useEffect(() => {
    Promise.all([
      getFloor(floorId).then((nextFloor) => setFloor(nextFloor)),
      getRooms(floorId).then((nextRooms) => setRooms(nextRooms)),
    ]);
  }, [floorId]);

  return (
    <div className="container">
      {floor !== undefined ? (
        <RoomsViewNavbar floorId={floor.id} floorName={floor.floorName} />
      ) : null}

      <div className="row">
        {rooms !== undefined && floor !== undefined
          ? rooms.map((room) => (
              <RoomSummary key={room.id} floorId={floor.id} room={room} />
            ))
          : null}
      </div>
    </div>
  );
};

export default RoomsList;
