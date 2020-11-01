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
            className={`container-fluid page-footer text-light mt-5 p-5 border-top shadow-sm bg-${theme.bg}`}
          >
            <p>Copyright 2020 - Domotica app</p>
          </footer>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Footer;
