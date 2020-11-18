import React, { useContext } from "react";
import { ThemeContext } from "./../contexts/ThemeContext";
import FormElement from "./services/schemes/FormElement";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Settings = () => {
  const {
    isLightTheme,
    toggleTheme,
    toggleTemperature,
    toggleMusic,
    fontSizeOptions,
    setNewFontSize,
    showTemperature,
    showMusic,
    fontSize,
  } = useContext(ThemeContext);

  const fontSizeHandler = (e) => {
    setNewFontSize(e.target.value);
  };

  return (
    <Container>
      <Row className="my-5 ml-3">
        <Form.Check
          type="switch"
          id="darkSwitch"
          onChange={toggleTheme}
          checked={isLightTheme}
          label="Light Mode"
        />
      </Row>

      <Row className="my-5 ml-3">
        <Form.Check
          type="switch"
          id="tempSwitch"
          onChange={toggleTemperature}
          checked={showTemperature}
          label="Toon temperatuur"
        />
      </Row>

      <Row className="my-5 ml-3">
        <Form.Check
          type="switch"
          id="musicSwitch"
          onChange={toggleMusic}
          checked={showMusic}
          label="Toon muziek"
        />
      </Row>

      <FormElement
        title="Verander lettertype grootte"
        changeHandler={fontSizeHandler}
        optionValues={fontSizeOptions}
        type="fontsizeSettings"
        value={fontSize}
      />
    </Container>
  );
};

export default Settings;
