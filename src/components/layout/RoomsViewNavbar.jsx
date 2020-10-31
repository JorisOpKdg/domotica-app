import React, { Component } from "react";
import { Link } from "react-router-dom";

class RoomsViewNavbar extends Component {
  state = {};
  render() {
    return (
      <div className="px-3 py-3 row">
        <div className="col-md-8">
          <h1 className="display-4">{this.props.floorName}</h1>
        </div>
        <div className="col-md-4">
          <Link
            className="mr-3 mt-3 btn btn-lg btn-outline-primary"
            to={`/rooms-list/${this.props.floorId}`}
          >
            List
          </Link>
          <Link
            className="mt-3 btn btn-lg btn-outline-secondary"
            to={`/rooms-map/${this.props.floorId}`}
          >
            Map
          </Link>
        </div>
      </div>
    );
  }
}

export default RoomsViewNavbar;
