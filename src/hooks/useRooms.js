import { useEffect, useState } from "react";
import { getRooms, postRoom, putRoom } from "./../api/callRooms";
import { useInterval } from "./useInterval";

const useRooms = () => {
  const [loading, setLoading] = useState(false);
  const [rooms, setRooms] = useState([]);

  const readAllRooms = async () => {
    setLoading(true);
    getRooms().then((rooms) => setRooms(rooms));
    setLoading(false);
  };

  const reloadRooms = () => readAllRooms();

  const readRoomsOfFloor = (floorId) => {
    console.log({ rooms, floorId });
    return rooms.filter((room) => room.floorId === floorId);
  };

  const readRoom = (roomId) => {
    return rooms.find((room) => room.id === +roomId);
  };

  /*
  const createRoom = async (room) => {
    setLoading(true);
    postRoom(room).then((room) =>
      setRooms((previousRooms) => [...previousRooms, room])
    );
    setLoading(false);
  };
  */

  const updateRoom = async (room) => {
    setLoading(true);
    putRoom(room).then((room) =>
      setRooms((previousRooms) => [...previousRooms, room])
    );
    setLoading(false);
  };

  useEffect(() => {
    readAllRooms();
  }, []);

  useInterval(() => {
    readAllRooms();
  }, [2000]);

  return {
    rooms,
    loading,
    readAllRooms,
    reloadRooms,
    readRoomsOfFloor,
    readRoom,
    updateRoom,
  };
};

export default useRooms;
