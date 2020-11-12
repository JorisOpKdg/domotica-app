import React, { createContext } from "react";
import useFloors from "../hooks/useFloors";

export const FloorContext = createContext();

const FloorContextProvider = ({ children }) => {
  const { floors, readAllFloors, readFloor } = useFloors();

  return (
    <FloorContext.Provider value={{ floors, readAllFloors, readFloor }}>
      {children}
    </FloorContext.Provider>
  );
};

export default FloorContextProvider;
