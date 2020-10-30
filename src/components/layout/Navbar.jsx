import React, { Component } from "react";
import { ThemeContext } from "./../../contexts/ThemeContext";
import DarkLogo from "./../../assets/images/logo-dark.png";
import LightLogo from "./../../assets/images/logo-light.png";

class Navbar extends Component {
  static contextType = ThemeContext;

  state = {
    floors: [],
  };

  componentDidMount() {
    this.setState({
      floors: [
        { id: 1, name: "Kelder" },
        { id: 2, name: "Woonkamer" },
        { id: 3, name: "1e verdiep" },
        { id: 4, name: "Zolder" },
      ],
    });
  }

  render() {
    const { isLightTheme, light, dark, toggleTheme } = this.context;
    const theme = isLightTheme ? dark : light;

    return (
      <nav
        className={`navbar navbar-expand-lg navbar-${theme.nav} bg-${theme.bg} p-3 mb-3  border-bottom shadow-sm`}
      >
        <a class="navbar-brand" href="/">
          <img src={DarkLogo} alt="Logo"></img>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            {this.state.floors &&
              this.state.floors.map((floor) => (
                <a
                  className="nav-link p-2 text-dark"
                  href={`/rooms-list/${floor.id}`}
                >
                  {floor.name}
                </a>
              ))}
          </ul>
          <form class="form-right my-2 my-lg-0">
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
          </form>
        </div>
      </nav>
    );
  }
}

export default Navbar;
