import React, { createContext } from "react";
import useSchemes from './../hooks/useSchemes';

export const SchemeContext = createContext();

const SchemeContextProvider = ({ children }) => {
  const {
    schemes,
    loading,
    readAllSchemes,
    reloadSchemes,
    readSchemesOfRoomWithService,
    createScheme,
    removeScheme,
  } = useSchemes();

  return (
    <SchemeContext.Provider
      value={{
        schemes,
        loading,
        readAllSchemes,
        reloadSchemes,
        readSchemesOfRoomWithService,
        createScheme,
        removeScheme,
      }}
    >
      {children}
    </SchemeContext.Provider>
  );
};

export default SchemeContextProvider;
