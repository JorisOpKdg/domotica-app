import React, { createContext } from "react";
import useSchemes from "./../hooks/useSchemes";

export const SchemeContext = createContext();

const SchemeContextProvider = ({ children }) => {
  const {
    schemes,
    readAllSchemes,
    readSchemesOfRoomWithService,
    readScheme,
    createScheme,
    updateScheme,
    removeScheme,
  } = useSchemes();

  return (
    <SchemeContext.Provider
      value={{
        schemes,
        readAllSchemes,
        readSchemesOfRoomWithService,
        readScheme,
        createScheme,
        updateScheme,
        removeScheme,
      }}
    >
      {children}
    </SchemeContext.Provider>
  );
};

export default SchemeContextProvider;
