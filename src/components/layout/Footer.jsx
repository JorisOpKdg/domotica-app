import React, { useContext } from "react";
import { ThemeContext } from "./../../contexts/ThemeContext";
import Container from "react-bootstrap/Container";

const Footer = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <Container
      fluid
      className={`page-footer mt-auto p-5 border-top shadow-sm bottom bg-${theme.bg}`}
    >
      <p style={{ color: `${theme.text}` }}>Copyright 2020 - Domotica app</p>
    </Container>
  );
};

export default Footer;
