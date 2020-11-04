import React, { useContext } from "react";
import { ThemeContext } from "./../../contexts/ThemeContext";

const Footer = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <footer
      className={`container-fluid page-footer text-light mt-auto p-5 border-top shadow-sm bottom bg-${theme.bg}`}
    >
      <p>Copyright 2020 - Domotica app</p>
    </footer>
  );
};

export default Footer;
