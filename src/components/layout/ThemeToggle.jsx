import React, { Component } from "react";
import { ThemeContext } from "./../../contexts/ThemeContext";

class ThemeToggle extends Component {
  static contextType = ThemeContext;

  state = {};

  render() {
    const { toggleTheme } = this.context;
    return (
      <div class="nav-link">
        <div class="custom-control custom-switch">
          <input
            type="checkbox"
            class="custom-control-input"
            id="darkSwitch"
            onClick={toggleTheme}
          />
          <label class="custom-control-label" for="darkSwitch">
            Dark Mode
          </label>
        </div>
      </div>
    );
  }
}

export default ThemeToggle;
