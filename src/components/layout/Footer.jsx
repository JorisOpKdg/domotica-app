import React from "react";
import { ThemeContext } from "./../../contexts/ThemeContext";

const Footer = () => {
  return (
    <ThemeContext.Consumer>
      {(context) => {
        const { isLightTheme, light, dark } = context;
        const theme = isLightTheme ? light : dark;
        return (
          <footer
            className={`container-fluid page-footer text-light mt-auto p-5 border-top shadow-sm bottom bg-${theme.bg}`}
          >
            <p>Copyright 2020 - Domotica app</p>
          </footer>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Footer;
