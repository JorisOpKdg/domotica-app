import { useEffect, useState } from "react";
import { getRooms, putRoom } from "./../api/callRooms";
import { useInterval } from "./useInterval";

const useRooms = () => {
  const [rooms, setRooms] = useState([]);

  const readAllRooms = async () => {
    getRooms().then((rooms) => setRooms(rooms));
  };

  const reloadRooms = () => readAllRooms();

  const readRoomsOfFloor = (floorId) => {
    console.log({ rooms, floorId });
    return rooms.filter((room) => room.floorId === floorId);
  };

  const readRoom = (roomId) => {
    return rooms.find((room) => room.id === +roomId);
  };

  const updateRoom = async (room) => {
    putRoom(room).then((room) =>
      setRooms((previousRooms) => [...previousRooms, room])
    );
    readAllRooms();
  };

  useEffect(() => {
    readAllRooms();
  }, []);

  useInterval(() => {
    readAllRooms();
  }, [2000]);

  return {
    rooms,
    readAllRooms,
    reloadRooms,
    readRoomsOfFloor,
    readRoom,
    updateRoom,
  };
};

export default useRooms;
