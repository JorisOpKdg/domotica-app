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
    Promise.all([
      getFloor(floorId).then((nextFloor) => setFloor(nextFloor)),
      getRooms(floorId).then((nextRooms) => setRooms(nextRooms)),
    ]);
  }, [floorId]);

  const getBackground = () => {
    switch (floorId) {
      case 1:
        return 'url("images/bg-kelder.jpeg")';
      case 2:
        return 'url("images/bg-kelder.jpeg")';
      case 3:
        return 'url("images/bg-kelder.jpeg")';
      case 4:
        return 'url("images/bg-kelder.jpeg")';
      default:
        return undefined;
    }
  };

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
          backgroundImage: getBackground(),
        }}
      >
        {floor !== undefined
          ? rooms.map((room) => (
              <RoomSummary key={room.id} floorId={floor.id} room={room} />
            ))
          : null}
      </div>
    </div>
  );
};

export default RoomsMap;
