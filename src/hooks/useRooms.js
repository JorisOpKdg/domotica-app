import { useEffect, useState } from "react";
import { getRooms, postRoom, putRoom } from "./../api/callRooms";
import { useInterval } from "./useInterval";

const useRooms = () => {
  const [loading, setLoading] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [currentRoom, setCurrentROom] = useState();

  const readAllRooms = async () => {
    setLoading(true);
    getRooms().then((rooms) => setRooms(rooms));
    setLoading(false);
  };

  const reloadRooms = () => readAllRooms();

  const readRoomsOfFloor = (floorId) => {
    console.log({ floorId, rooms });
    return rooms.filter((room) => room.floorId === floorId);
  };

  const readRoom = async (roomId) => {
    return rooms.find((room) => room.id === roomId);
  };

  const instantiateCurrentRoom = (roomId) => {
    setCurrentROom(readRoom(roomId));
  };

  const createRoom = async (room) => {
    setLoading(true);
    postRoom(room).then((room) =>
      setRooms((previousRooms) => [...previousRooms, room])
    );
    setLoading(false);
  };

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
    currentRoom,
    loading,
    readAllRooms,
    reloadRooms,
    readRoomsOfFloor,
    readRoom,
    createRoom,
    updateRoom,
    instantiateCurrentRoom,
  };
};

export default useRooms;
