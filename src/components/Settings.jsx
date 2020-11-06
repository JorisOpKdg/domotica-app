import React, { useContext } from "react";
import { ThemeContext } from "./../contexts/ThemeContext";

const Settings = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div className="container">
      <form className="form-right my-5">
        <div className="custom-control custom-switch">
          <input
            type="checkbox"
            className="custom-control-input"
            id="darkSwitch"
            onClick={toggleTheme}
          />
          <label className="custom-control-label" for="darkSwitch">
            Light Mode
          </label>
        </div>
      </form>
    </div>
  );
};

export default Settings;
