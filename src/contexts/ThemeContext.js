import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [isLightTheme, setIsLightTheme] = useState(false);
  const [showTemperature, setShowTemperature] = useState(true);
  const [showMusic, setShowMusic] = useState(true);
  const [fontSize, setFontSize] = useState(20);

  const light = {
    nav: "light",
    bg: "white",
    logo: "light",
    btn: "dark",
    text: "black",
  };

  const dark = {
    nav: "dark",
    bg: "dark",
    logo: "dark",
    btn: "light",
    text: "white",
  };
  
  const fontSizeOptions = [12, 14, 16, 18, 20, 22, 24, 30];

  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
  };

  const toggleTemperature = () => {
    setShowTemperature(!showTemperature);
  };

  const toggleMusic = () => {
    setShowMusic(!showMusic);
  };

  const setNewFontSize = (newFontSize) => {
    setFontSize(newFontSize);
  };

  return (
    <ThemeContext.Provider
      value={{
        isLightTheme,
        showMusic,
        showTemperature,
        light,
        dark,
        fontSize,
        fontSizeOptions,
        toggleTheme,
        setNewFontSize,
        toggleTemperature,
        toggleMusic,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
