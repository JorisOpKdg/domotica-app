import React, { Component } from "react";
import { ThemeContext } from "./../../contexts/ThemeContext";
import DarkLogo from "./../../assets/logo/logo-dark.png";
import LightLogo from "./../../assets/logo/logo-light.png";
import { getFloors } from "../../api/callFloors";
import { Link } from "react-router-dom";

// Dit is een voorbeeld van een class component zonder hooks
class Navbar extends Component {
  static contextType = ThemeContext;

  state = {
    floors: [],
  };

  componentDidMount() {
    getFloors().then((floors) => this.setState({ floors: floors }));
  }

  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;

    return (
      <nav
        className={`navbar navbar-expand-lg navbar-${theme.nav} bg-${theme.bg} p-3 mb-3  border-bottom shadow-sm`}
      >
        <Link key="navbar-logo" className="navbar-brand" to="/">
          <img
            id="logo"
            src={isLightTheme ? DarkLogo : LightLogo}
            alt="Logo"
          ></img>
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
                <Link
                  key={floor.id}
                  className="nav-link"
                  to={`/rooms-list/${floor.id}`}
                >
                  {floor.name}
                </Link>
              ))}
            <Link id="instellingen-nav" className="nav-link" to="/settings/">
              Instellingen
            </Link>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
