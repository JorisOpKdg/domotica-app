import React, { Component } from "react";
import { Link } from "react-router-dom";

class StartPage extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <h1>Dit is de startpagina</h1>
        <ul>
          <li key="kelder">
            <Link to="/rooms-list/1">Kelder</Link>
          </li>
          <li key="gelijksvloer">
            <Link to="/rooms-list/2">Gelijksvloer</Link>
          </li>
          <li key="1eVerdiep">
            <Link to="/rooms-list/3">1e verdiep</Link>
          </li>
          <li key="zolder">
            <Link to="/rooms-list/4">Zolder</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default StartPage;
