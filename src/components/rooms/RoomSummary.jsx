import React, { Component } from "react";
import { Link } from "react-router-dom";

class RoomSummary extends Component {
  state = {};
  render() {
    return (
      <div className="col-md-6 col-lg-3">
        <div className="card mb-3 shadow-sm">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">{this.props.room.name}</h4>
          </div>
          <div className="card-body">
            <ul className="list-unstyled mt-3 mb-4">
              <li>Temperatuur: {this.props.room.temperature}</li>
              <li>Verlichting: {this.props.room.lightning}</li>
              <li>Muziek: {this.props.room.music}</li>
              <li>{this.props.room.curtains && `Gordijnen: ${this.props.room.curtains ? "Open" : "Gesloten"}`}</li>
            </ul>
            <Link
              className="btn btn-lg btn-block btn-outline-primary"
              to={`/room-detail/${this.props.floorId}/${this.props.room.id}`}
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default RoomSummary;
