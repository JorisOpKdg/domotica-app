import React, { Component } from "react";
import axios from "axios";
import { DB_URL } from "../database/db";

// Dit is een voorbeeld van een class component
class RoomDetailView extends Component {
  constructor() {
    super();
    this.state = {
      hadError: false,
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
  }

  async componentDidMount() {
    try {
      const floorId = this.props.match.params.floorId;
      const roomId = this.props.match.params.roomId;
      const response = await axios.get(`${DB_URL}/${floorId}/${roomId}`);
      this.setState({ room: response.data });
    } catch (error) {
      this.setState({ hadError: true });
    }
  }

  render() {
    const { room } = this.state;

    return (
      <>
        <div className="container">
          <div className="px-3 py-3 pt-md-5 pb-md-4 mx-auto">
            <h1 className="display-4">{room.name}</h1>
          </div>
        </div>

        <div className="container">
          <div className="card-deck mb-3 text-center">
            <div className="card mb-4 shadow-sm">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">Temperatuur</h4>
              </div>
              <div className="card-body">
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Temperatuur: {room.temperature}</li>
                </ul>
              </div>
            </div>

            <div className="card mb-4 shadow-sm">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">Verlichting</h4>
              </div>
              <div className="card-body">
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Verlichting: {room.lighting}</li>
                </ul>
              </div>
            </div>

            <div className="card mb-4 shadow-sm">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">Muziek</h4>
              </div>
              <div className="card-body">
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Muziek: {room.music}</li>
                </ul>
              </div>
            </div>

            <div className="card mb-4 shadow-sm">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">Gordijnen</h4>
              </div>
              <div className="card-body">
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Gordijnen: {room.curtains}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default RoomDetailView;
