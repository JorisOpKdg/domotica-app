import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ThemeContext } from "../../contexts/ThemeContext";
import { FloorContext } from "./../../contexts/FloorContext";
import DarkLogo from "./../../assets/logo/logo-dark.png";
import LightLogo from "./../../assets/logo/logo-light.png";

// Dit is een voorbeeld van een class component zonder hooks
class Menu extends Component {
  render() {
    return (
      <FloorContext.Consumer>
        {(floorContext) => (
          <ThemeContext.Consumer>
            {(themeContext) => {
              const { floors } = floorContext;
              const { isLightTheme, light, dark } = themeContext;
              const theme = isLightTheme ? light : dark;
              return (
                <Navbar
                  bg={theme.bg}
                  variant={theme.nav}
                  expand="lg"
                  className="p-3 mb-3  border-bottom shadow-sm"
                >
                  <Navbar.Brand className="ml-3" href="/">
                    <img
                      id="logo"
                      src={isLightTheme ? DarkLogo : LightLogo}
                      alt="Logo"
                    ></img>
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="navbarSupportedContent" />
                  <Navbar.Collapse id="navbarSupportedContent">
                    <Nav className="mr-auto">
                      {floors &&
                        floors.map((floor) => (
                          <li className="nav-item">
                            <Nav.Link
                              key={floor.id}
                              className="nav-link"
                              href={`/rooms-list/${floor.id}`}
                            >
                              {floor.name}
                            </Nav.Link>
                          </li>
                        ))}
                    </Nav>
                    <Form inline>
                      <Button
                        variant={`outline-${theme.btn}`}
                        className="mr-3 my-2 my-sm-0"
                        href="/settings/"
                      >
                        Instellingen
                      </Button>
                    </Form>
                  </Navbar.Collapse>
                </Navbar>
              );
            }}
          </ThemeContext.Consumer>
        )}
      </FloorContext.Consumer>
    );
  }
}

export default Menu;

/*
 <nav
        className={`navbar navbar-expand-lg navbar-${theme.nav} bg-${theme.bg} p-3 mb-3  border-bottom shadow-sm`}
      >
        <Link key="navbar-logo" className="navbar-brand ml-3" to="/">
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
                <li className="nav-item">
                  <Link
                    key={floor.id}
                    className="nav-link"
                    to={`/rooms-list/${floor.id}`}
                  >
                    {floor.name}
                  </Link>
                </li>
              ))}
            <li>
              <Link id="instellingen-nav" className="nav-link" to="/settings/">
                Instellingen
              </Link>
            </li>
          </ul>
          <button className="btn btn-outline-light mr-3 my-2 my-sm-0" type="submit">
            Inloggen
          </button>
        </div>
      </nav>
      */
