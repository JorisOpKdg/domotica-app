import React, { Component } from "react";
import axios from "axios";
import { DB_URL } from "../../database/db";
import TemperatureCard from "../services/TemperatureCard";
import LightingCard from "./../services/LightingCard";
import MusicCard from "./../services/MusicCard";
import CurtainsCard from "../services/CurtainsCard";

class RoomDetail extends Component {
  state = {
    room: {},
  };

  async componentDidMount() {
    try {
      const response = await axios.get(
        `${DB_URL}/rooms/${this.props.match.params.roomId}`
      );
      const room = response.data;
      this.setState({ room: room });
    } catch (error) {
      console.error("Could not load rooms:" + error);
    }
  }

  render() {
    return (
      <div className="container">
        <h1>{this.state.room && this.state.room.name}</h1>
        <h3>Beschrijving</h3>
        <p>{this.state.room && this.state.room.description}</p>

        <div className="row">
          {this.state.room.temperature && (
            <TemperatureCard room={this.state.room} />
          )}
          {this.state.room.lighting && <LightingCard room={this.state.room} />}
          {this.state.room.music && <MusicCard room={this.state.room} />}
          {this.state.room.curtains && <CurtainsCard room={this.state.room} />}
        </div>
      </div>
    );
  }
}

export default RoomDetail;
