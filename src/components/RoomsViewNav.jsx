import React, { Component } from "react";
import { Link } from "react-router-dom";

// Dit is een voorbeeld van een class component
class RoomsViewNav extends Component {
  state = {
    floorId: 2,
  };

  async componentDidMount() {
    this.setState(this.props.match.params.floorId)
  }

  render() {
    return (
      <div className="container">
        <div class="px-3 py-3 pt-md-5 pb-md-4 mx-auto">
          <h1 class="display-4">Gelijksvloers</h1>
          <Link className="p-2" to={`/map/${this.state.floorId}`}>
            Map
          </Link>
          <Link className="p-2" to={`/${this.state.floorId}`}>
            List
          </Link>
        </div>
      </div>
    );
  }
}

export default RoomsViewNav;
