import React, { Component } from 'react';
import { ThemeContext } from "./../contexts/ThemeContext";

class Settings extends Component {
    static contextType = ThemeContext;

    state = {  }

    render() { 
        const { toggleTheme } = this.context;
        
        return ( <form class="form-right my-2 my-lg-0">
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
      </form> );
    }
}
 
export default Settings;