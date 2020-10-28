import React, { Component } from "react";
import axios from "axios";
import { DB_URL } from "../../database/db";
import RoomSummary from "./RoomSummary";
import RoomsViewNavbar from "./../layout/RoomsViewNavbar";

class RoomsList extends Component {
  state = {
    floorId: 2,
    floorName: "",
    rooms: [],
  };

  async componentDidMount() {
    try {
      const response = await axios.get(
        `${DB_URL}/floors/${this.props.match.params.floorId}`
      );
      const data = response.data;
      this.setState({
        floorName: data.name,
        floorId: this.props.match.params.floorId,
        rooms: data.rooms,
      });
    } catch (error) {
      console.error("Could not load rooms:" + error);
    }
  }

  render() {
    return (
      <>
        <div className="container">
          <RoomsViewNavbar
            floorId={this.state.floorId}
            floorName={this.state.floorName}
          />
          <div className="row">
            {this.state.rooms &&
              this.state.floorId &&
              this.state.rooms.map((room) => (
                <RoomSummary floorId={this.state.floorId} room={room} />
              ))}
          </div>
        </div>
      </>
    );
  }
}

export default RoomsList;
