import React, { createContext } from "react";
import useRooms from "./../hooks/useRooms";

export const RoomContext = createContext();

const RoomContextProvider = ({ children }) => {
  const {
    rooms,
    readAllRooms,
    reloadRooms,
    readRoomsOfFloor,
    readRoom,
    updateRoom,
  } = useRooms();

  return (
    <RoomContext.Provider
      value={{
        rooms,
        readAllRooms,
        reloadRooms,
        readRoomsOfFloor,
        readRoom,
        updateRoom,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export default RoomContextProvider;
