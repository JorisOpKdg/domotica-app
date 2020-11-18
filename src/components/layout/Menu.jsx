import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ThemeContext } from "../../contexts/ThemeContext";
import { FloorContext } from "./../../contexts/FloorContext";
import DarkLogo from "./../../assets/logo/logo-dark.png";
import LightLogo from "./../../assets/logo/logo-light.png";
import { Link } from "react-router-dom";
import { loginRoute, settingsRoute } from './../../routes';

const Menu = () => {
  const { floors } = useContext(FloorContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <Navbar
      bg={theme.bg}
      variant={theme.nav}
      expand="lg"
      className="p-3 mb-3  border-bottom shadow-sm"
    >
      <Navbar.Brand className="ml-3" href="/home">
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
              <li key={floor.id} className="nav-item">
                <Link className="nav-link" to={`/rooms-list/${floor.id}`}>
                  {floor.name}
                </Link>
              </li>
            ))}
        </Nav>
        <Form inline>
        <Link to={loginRoute}>
            <Button
              variant={`outline-${theme.btn}`}
              className="mr-3 my-2 my-sm-0"
            >
              Inloggen
            </Button>
          </Link>

          <Link to={settingsRoute}>
            <Button
              variant={`outline-${theme.btn}`}
              className="mr-3 my-2 my-sm-0"
            >
              Instellingen
            </Button>
          </Link>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;
