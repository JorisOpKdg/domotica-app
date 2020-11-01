import React, { Component } from "react";
import { ThemeContext } from "./../contexts/ThemeContext";

class Settings extends Component {
  static contextType = ThemeContext;

  state = {};

  render() {
    const { toggleTheme } = this.context;

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
  }
}

export default Settings;
