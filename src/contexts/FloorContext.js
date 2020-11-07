import React, { createContext } from "react";
import useFloors from "../hooks/useFloors";

export const FloorContext = createContext();

const FloorContextProvider = ({ children }) => {
  const { floors, floor, loading, getFloors, getFloor } = useFloors();

  return (
    <FloorContext.Provider value={{ floors, floor, loading, getFloors, getFloor }}>
      {children}
    </FloorContext.Provider>
  );
};

export default FloorContextProvider;
