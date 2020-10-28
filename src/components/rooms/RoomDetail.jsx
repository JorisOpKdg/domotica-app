import React, { Component } from "react";
import axios from "axios";
import { DB_URL } from "../../database/db";

class RoomDetail extends Component {
  state = {
    room: {
      id: 0,
      name: "",
      description: "",
      temperature: 0,
      lighting: 0,
      music: 0,
      curtains: false,
    },
  };

  async componentDidMount() {
    try {
      const response = await axios.get(
        `${DB_URL}/floors/${this.props.match.params.floorId}`
      );
      const rooms = response.data.rooms;
      const room = rooms.filter(
        (room) => room.id === this.props.match.params.roomId
      );
      this.setState({
        room: {
          id: room.id,
          name: room.name,
          description: room.description,
          temperature: room.temperature,
          lighting: room.lighting,
          music: room.music,
          curtains: room.curtains,
        }
      });
    } catch (error) {
      console.error("Could not load rooms:" + error);
    }
  }

  render() {
    console.log(this.props.match.params.roomId);
    console.log(this.state.room);
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
                <p>Verlichting: {this.state.room && this.state.room.lighting}</p>
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
