import React, { useEffect, useState } from "react";
import axios from "axios";
import { DB_URL } from "../../database/db";
import RoomSummary from "./RoomSummary";
import RoomsViewNavbar from "./../layout/RoomsViewNavbar";

const RoomsList = ({
  match: {
    params: { floorId },
  },
}) => {
  const [state, setState] = useState({ floorId, rooms: [] });

  useEffect(() => {
    axios
      .get(`${DB_URL}/rooms?floorid=${floorId}`)
      .then((response) => {
        setState((prevState) => ({ ...prevState, rooms: response.data }));
      })
      .then(() => axios.get(`${DB_URL}/floors/${floorId}`))
      .then((response) => {
        setState((prevState) => ({
          ...prevState,
          floorName: response.data.name,
        }));
      });
  }, [floorId]);

  return (
    <div className="container">
      <RoomsViewNavbar floorId={state.floorId} floorName={state.floorName} />
      <div className="row">
        {state.rooms &&
          state.floorId &&
          state.rooms.map((room) => (
            <RoomSummary floorId={state.floorId} room={room} />
          ))}
      </div>
    </div>
  );
};

export default RoomsList;

/*
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
        `${DB_URL}/rooms?floorid=${this.props.match.params.floorId}`
      );
      this.setState({
        floorId: this.props.match.params.floorId,
        rooms: response.data,
      });
    } catch (error) {
      console.error("Could not load rooms:" + error);
    }

    try {
      const response = await axios.get(
        `${DB_URL}/floors/${this.props.match.params.floorId}`
      );
      this.setState({
        floorName: response.data.name,
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
*/
