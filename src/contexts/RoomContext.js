import React, { createContext } from "react";
import useRooms from "./../hooks/useRooms";

export const RoomContext = createContext();

const RoomContextProvider = ({ children }) => {
  const {
    rooms,
    currentRoom,
    loading,
    readAllRooms,
    reloadRooms,
    readRoomsOfFloor,
    readRoom,
    createRoom,
    updateRoom,
    instantiateCurrentRoom
  } = useRooms();

  return (
    <RoomContext.Provider
      value={{
        rooms,
    currentRoom,
    loading,
    readAllRooms,
    reloadRooms,
    readRoomsOfFloor,
    readRoom,
    createRoom,
    updateRoom,
    instantiateCurrentRoom
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export default RoomContextProvider;
