import React, { useContext } from "react";
import { ThemeContext } from "./../contexts/ThemeContext";
import FormElement from "./services/schemes/FormElement";

const Settings = () => {
  const {
    isLightTheme,
    toggleTheme,
    toggleTemperature,
    toggleMusic,
    fontSizeOptions,
    setFontSize,
    showTemperature,
    showMusic,
    fontSize,
  } = useContext(ThemeContext);

  const fontSizeHandler = (e) => {
    setFontSize(e.target.value);
  };

  return (
    <div className="container">
      <form className="form-right my-5 ml-3">
        <div className="custom-control custom-switch">
          <input
            type="checkbox"
            className="custom-control-input"
            id="darkSwitch"
            onClick={toggleTheme}
            checked={isLightTheme}
          />
          <label className="custom-control-label" htmlFor="darkSwitch">
            Light Mode
          </label>
        </div>
      </form>

      <form className="form-right my-5 ml-3">
        <div className="custom-control custom-switch">
          <input
            type="checkbox"
            className="custom-control-input"
            id="tempSwitch"
            onClick={toggleTemperature}
            checked={showTemperature}
          />
          <label className="custom-control-label" htmlFor="tempSwitch">
            Toon temperatuur
          </label>
        </div>
      </form>
      <form className="form-right my-5 ml-3">
        <div className="custom-control custom-switch">
          <input
            type="checkbox"
            className="custom-control-input"
            id="musicSwitch"
            onClick={toggleMusic}
            checked={showMusic}
          />
          <label className="custom-control-label" htmlFor="musicSwitch">
            Toon muziek
          </label>
        </div>
      </form>

      <FormElement
        title="Verander lettertype grootte"
        changeHandler={fontSizeHandler}
        optionValues={fontSizeOptions}
        type="fontsizeSettings"
        value={fontSize}
      />
    </div>
  );
};

export default Settings;
