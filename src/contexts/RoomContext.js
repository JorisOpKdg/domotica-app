import React, { createContext } from "react";
import useRooms from './../hooks/useRooms';

export const RoomContext = createContext();

const RoomContextProvider = ({ children }) => {
    const { rooms, loading, reloadRooms, getRooms, getRoom, putRoom } = useRooms();
  
    return (
      <FloorContext.Provider value={{ rooms, loading, reloadRooms, getRooms, getRoom, putRoom }}>
        {children}
      </FloorContext.Provider>
    );
  };
  
  export default RoomContextProvider;
  