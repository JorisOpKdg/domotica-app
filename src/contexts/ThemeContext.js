import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [state, setState] = useState({
    isLightTheme: false,
    light: {
      nav: "light",
      bg: "white",
      logo: "light",
      btn: "dark",
      text: "black",
    },
    dark: {
      nav: "dark",
      bg: "dark",
      logo: "dark",
      btn: "light",
      text: "white",
    },
    showTemperature: true,
    showMusic: true,
    fontSize: 20,
    fontSizeOptions: [12, 14, 16, 18, 20, 22, 24, 30],
  });

  const toggleTheme = () => {
    setState({ isLightTheme: !this.state.isLightTheme });
  };

  const toggleTemperature = () => {
    setState({ showTemperature: !this.state.showTemperature });
  };

  const toggleMusic = () => {
    setState({ showMusic: !this.state.showMusic });
  };

  const setFontSize = (newFontSize) => {
    setState({ fontSize: newFontSize });
  };

  return (
    <ThemeContext.Provider
      value={{
        state,
        toggleTheme,
        setFontSize,
        toggleTemperature,
        toggleMusic,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
