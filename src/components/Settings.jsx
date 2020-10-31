import React, { Component } from "react";
import { ThemeContext } from "./../contexts/ThemeContext";

class Settings extends Component {
  static contextType = ThemeContext;

  state = {};

  render() {
    const { toggleTheme } = this.context;

    return (
      <form className="form-right my-2 my-lg-0">
        <div className="custom-control custom-switch">
          <input
            type="checkbox"
            className="custom-control-input"
            id="darkSwitch"
            onClick={toggleTheme}
          />
          <label className="custom-control-label" for="darkSwitch">
            Dark Mode
          </label>
        </div>
      </form>
    );
  }
}

export default Settings;
