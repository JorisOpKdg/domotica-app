import React, { Component } from "react";
import axios from "axios";
import { DB_URL } from "../../database/db";
import { ThemeContext } from "./../../contexts/ThemeContext";
import DarkLogo from "./../../assets/images/logo-dark.png";
import LightLogo from "./../../assets/images/logo-light.png";
import { Link } from "react-router-dom";

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
        <Link className="navbar-brand" to="/">
          <img src={isLightTheme ? DarkLogo : LightLogo} alt="Logo"></img>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {this.state.floors &&
              this.state.floors.map((floor) => (
                <Link className="nav-link" to={`/rooms-list/${floor.id}`}>
                  {floor.name}
                </Link>
              ))}
            <Link className="nav-link" to="/settings/">
              Instellingen
            </Link>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
