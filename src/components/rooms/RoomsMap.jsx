import React, { useEffect, useState } from "react";
import RoomSummary from "./RoomSummary";
import RoomsViewNavbar from "./../layout/RoomsViewNavbar";
import { getRooms } from "./../api/callRooms";
import { getFloor } from "./../api/callFloors";
import kelder from "./../../assets/images/bg-kelder.jpeg";

const RoomsMap = ({
  match: {
    params: { floorId },
  },
}) => {
  const [rooms, setRooms] = useState([]);
  const [floor, setFloor] = useState();

  useEffect(() => {
    setRooms(getRooms());
    setFloor(getFloor(floorId));
  }, [floorId]);

  const getBackground = () => {
    switch (floor.id) {
      case 1:
        return kelder;
      case 2:
        return kelder;
      case 3:
        return kelder;
      case 4:
        return kelder;
      default:
        return "white";
    }
  };

  return (
    <div className="container">
      {floor !== undefined ? (
        <RoomsViewNavbar floorId={floor.floorId} floorName={floor.floorName} />
      ) : null}

      <div className="row" style={{ background: getBackground() }}>
        {floor !== undefined
          ? rooms.map((room) => (
              <RoomSummary key={room.id} floorId={floor.floorId} room={room} />
            ))
          : null}
      </div>
    </div>
  );
};

export default RoomsMap;
