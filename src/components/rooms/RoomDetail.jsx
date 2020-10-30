import React, { Component } from "react";
import axios from "axios";
import { DB_URL } from "../../database/db";

class RoomDetail extends Component {
  state = {
    room: {},
  };

  async componentDidMount() {
    try {
      const response = await axios.get(
        `${DB_URL}/floors/${this.props.match.params.floorId}`
      );
      const rooms = response.data.rooms;
      console.log("data voor de filter: " + response.data);
      console.log("rooms voor de filter: " + rooms);
      console.log("number of rooms voor de filter: " + rooms);

      //Hier loopt het toch helemaal mis
      const filteredroom = rooms.filter(
        (room) => room.id === this.props.match.params.roomId
      );
      
      const room = filteredroom[0];
      console.log("Rooms na de filter: " + room);
      console.log("number of rooms na de filter: " + filteredroom.length);

      this.setState({ room: room });
    } catch (error) {
      console.error("Could not load rooms:" + error);
    }
  }

  render() {
    console.log("RoomId in render: " + this.props.match.params.roomId);
    console.log("FloorId in render: " + this.props.match.params.floorId);
    console.log("room in render" + this.state.room && this.state.room);
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <div className="card mb-3 shadow-sm">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">Temperatuur</h4>
              </div>
              <div className="card-body">
                <p>
                  Temperatuur: {this.state.room && this.state.room.temperature}
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card mb-3 shadow-sm">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">Verlichting</h4>
              </div>
              <div className="card-body">
                <p>
                  Verlichting: {this.state.room && this.state.room.lighting}
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card mb-3 shadow-sm">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">Muziek</h4>
              </div>
              <div className="card-body">
                <p>Muziek: {this.state.room && this.state.room.music}</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card mb-3 shadow-sm">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">Gordijnen</h4>
              </div>
              <div className="card-body">
                <p>Gordijnen: {this.state.room && this.state.room.curtains}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RoomDetail;
