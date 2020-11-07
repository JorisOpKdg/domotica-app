import React, { createContext } from "react";

export const SchemeContext = createContext();

const SchemeContextProvider = ({ children }) => {
  const {
    schemes,
    loading,
    getSchemes,
    reloadSchemes,
    postScheme,
    deleteScheme,
  } = useRooms();

  return (
    <SchemeContext.Provider
      value={{
        schemes,
        loading,
        getSchemes,
        reloadSchemes,
        postScheme,
        deleteScheme,
      }}
    >
      {children}
    </SchemeContext.Provider>
  );
};

export default SchemeContextProvider;
