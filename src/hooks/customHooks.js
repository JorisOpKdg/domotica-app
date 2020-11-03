import { useState, useEffect } from "react";
import { getRooms } from "./../api/callRooms";
import { getFloor } from "./../api/callFloors";

export function useRoomsAndFloor(floorId) {
  const [rooms, setRooms] = useState([]);
  const [floor, setFloor] = useState();

  useEffect(() => {
    Promise.all([
      getFloor(floorId).then((nextFloor) => setFloor(nextFloor)),
      getRooms(floorId).then((nextRooms) => setRooms(nextRooms)),
    ]);
  }, [floorId]);

  return { rooms: rooms, floor: floor };
}
