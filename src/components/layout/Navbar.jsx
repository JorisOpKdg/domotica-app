import React, { Component } from "react";
import axios from "axios";
import { DB_URL } from "../../database/db";
import { ThemeContext } from "./../../contexts/ThemeContext";
import DarkLogo from "./../../assets/images/logo-dark.png";
import LightLogo from "./../../assets/images/logo-light.png";

class Navbar extends Component {
  static contextType = ThemeContext;

  state = {
    floors: [],
  };

  async componentDidMount() {
    try {
      const response = await axios.get(`${DB_URL}/floors`);
      const floors = response.data;
      this.setState({ floors: floors });
    } catch (error) {
      console.error("Could not load floors:" + error);
    }
  }

  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;

    return (
      <nav
        className={`navbar navbar-expand-lg navbar-${theme.nav} bg-${theme.bg} p-3 mb-3  border-bottom shadow-sm`}
      >
        <a class="navbar-brand" href="/">
          <img src={isLightTheme ? DarkLogo : LightLogo} alt="Logo"></img>
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
                <a className="nav-link" href={`/rooms-list/${floor.id}`}>
                  {floor.name}
                </a>
              ))}
            <a className="nav-link" href="/settings/">
              Instellingen
            </a>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
