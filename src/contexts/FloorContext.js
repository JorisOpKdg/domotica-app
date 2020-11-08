import React, { createContext } from "react";
import useFloors from "../hooks/useFloors";

export const FloorContext = createContext();

const FloorContextProvider = ({ children }) => {
  const { floors, readAllFloors, reloadFloors, readFloor } = useFloors();

  return (
    <FloorContext.Provider value={{ floors, readAllFloors, reloadFloors, readFloor }}>
      {children}
    </FloorContext.Provider>
  );
};

export default FloorContextProvider;
