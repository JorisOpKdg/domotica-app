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
        <h1>Naam van de kamer</h1>
        <h3>Beschrijving</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          nulla temporibus! Expedita unde rem quos tempore veniam, in repellat.
          Sapiente perferendis odit cum soluta? Inventore voluptates
          exercitationem tempora amet nihil.
        </p>
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

        <div className="row">
          <div className="col-lg-6">
            <div className="card mb-3 shadow-sm">
              <div className="card-header pl-5 pt-3">
                <div className="row">
                  <div className="col-8">
                    <h2 className="my-0 font-weight-normal">Temperatuur:</h2>
                  </div>
                  <div className="col-4">
                    <h2 className="text-right pr-4 ">17°</h2>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item py-2">
                    <div className="row">
                      <div className="col-8">
                        <h5 className="card-title pl-3">Ingesteld op:</h5>
                      </div>
                      <div className="col-4 text-">
                        <h3 className="text-right pr-2">20°</h3>
                      </div>
                      <form className="m-3 col-11">
                        <input
                          type="range"
                          class="custom-range"
                          min="0"
                          max="5"
                          id="temperatureRange"
                        ></input>
                      </form>
                    </div>
                  </li>
                  <li class="list-group-item py-4">
                    <div className="row">
                      <div className="col-8">
                        <h5 className="card-title pl-3 pt-2">Slim schema</h5>
                      </div>
                      <div className="col-4">
                        <a className="btn btn-primary float-right mr-3">
                          Nieuw
                        </a>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item py-4">
                    <div className="row">
                      <div className="col-4 ">
                        <ul className="list-unstyled pl-3">
                          <li>Start: 09:00</li>
                          <li>Eind: 12:00</li>
                        </ul>
                      </div>
                      <div className="col-4">
                        <h2>20°</h2>
                      </div>
                      <div className="col-4">
                        <a className="btn btn-outline-danger float-right mr-3">
                          Delete
                        </a>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item py-4">
                    <div className="row">
                      <div className="col-4 ">
                        <ul className="list-unstyled pl-3">
                          <li>Start: 09:00</li>
                          <li>Eind: 12:00</li>
                        </ul>
                      </div>
                      <div className="col-4">
                        <h2>20°</h2>
                      </div>
                      <div className="col-4">
                        <a className="btn btn-outline-danger float-right mr-3">
                          Delete
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card mb-3 shadow-sm">
              <div className="card-header pl-5 pt-3">
                <div className="row">
                  <div className="col-8">
                    <h2 className="my-0 font-weight-normal">Verlichting:</h2>
                  </div>
                  <div className="col-4">
                    <h2 className="text-right pr-4 ">17</h2>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item py-2">
                    <div className="row">
                      <div className="col-8">
                        <h5 className="card-title pl-3">Ingesteld op:</h5>
                      </div>
                      <div className="col-4 text-">
                        <h3 className="text-right pr-2">20</h3>
                      </div>
                      <form className="m-3 col-11">
                        <input
                          type="range"
                          class="custom-range"
                          min="0"
                          max="5"
                          id="temperatureRange"
                        ></input>
                      </form>
                    </div>
                  </li>
                  <li class="list-group-item py-4">
                    <div className="row">
                      <div className="col-8">
                        <h5 className="card-title pl-3 pt-2">Slim schema</h5>
                      </div>
                      <div className="col-4">
                        <a className="btn btn-primary float-right mr-3">
                          Nieuw
                        </a>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item py-4">
                    <div className="row">
                      <div className="col-4 ">
                        <ul className="list-unstyled pl-3">
                          <li>Start: 09:00</li>
                          <li>Eind: 12:00</li>
                        </ul>
                      </div>
                      <div className="col-4">
                        <h2>20</h2>
                      </div>
                      <div className="col-4">
                        <a className="btn btn-outline-danger float-right mr-3">
                          Delete
                        </a>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item py-4">
                    <div className="row">
                      <div className="col-4 ">
                        <ul className="list-unstyled pl-3">
                          <li>Start: 09:00</li>
                          <li>Eind: 12:00</li>
                        </ul>
                      </div>
                      <div className="col-4">
                        <h2>20</h2>
                      </div>
                      <div className="col-4">
                        <a className="btn btn-outline-danger float-right mr-3">
                          Delete
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card mb-3 shadow-sm">
              <div className="card-header pl-5 pt-3">
                <div className="row">
                  <div className="col-8">
                    <h2 className="my-0 font-weight-normal">Muziek:</h2>
                  </div>
                  <div className="col-4">
                    <h2 className="text-right pr-4 ">17</h2>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item py-2">
                    <div className="row">
                      <div className="col-8">
                        <h5 className="card-title pl-3">Ingesteld op:</h5>
                      </div>
                      <div className="col-4 text-">
                        <h3 className="text-right pr-2">20</h3>
                      </div>
                      <form className="m-3 col-11">
                        <input
                          type="range"
                          class="custom-range"
                          min="0"
                          max="5"
                          id="temperatureRange"
                        ></input>
                      </form>
                    </div>
                  </li>
                  <li class="list-group-item py-4">
                    <div className="row">
                      <div className="col-8">
                        <h5 className="card-title pl-3 pt-2">Slim schema</h5>
                      </div>
                      <div className="col-4">
                        <a className="btn btn-primary float-right mr-3">
                          Nieuw
                        </a>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item py-4">
                    <div className="row">
                      <div className="col-4 ">
                        <ul className="list-unstyled pl-3">
                          <li>Start: 09:00</li>
                          <li>Eind: 12:00</li>
                        </ul>
                      </div>
                      <div className="col-4">
                        <h2>20</h2>
                      </div>
                      <div className="col-4">
                        <a className="btn btn-outline-danger float-right mr-3">
                          Delete
                        </a>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item py-4">
                    <div className="row">
                      <div className="col-4 ">
                        <ul className="list-unstyled pl-3">
                          <li>Start: 09:00</li>
                          <li>Eind: 12:00</li>
                        </ul>
                      </div>
                      <div className="col-4">
                        <h2>20</h2>
                      </div>
                      <div className="col-4">
                        <a className="btn btn-outline-danger float-right mr-3">
                          Delete
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card mb-3 shadow-sm">
              <div className="card-header pl-5 pt-3">
                <div className="row">
                  <div className="col-8">
                    <h2 className="my-0 font-weight-normal">Gordijnen</h2>
                  </div>
                  <div className="col-4">
                    <h2 className="text-right pr-4 ">17</h2>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item py-2">
                    <div className="row">
                      <div className="col-8">
                        <h5 className="card-title pl-3">Ingesteld op:</h5>
                      </div>
                      <div className="col-4 text-">
                        <h3 className="text-right pr-2">20</h3>
                      </div>
                      <form className="m-3 col-11">
                        <input
                          type="range"
                          class="custom-range"
                          min="0"
                          max="5"
                          id="temperatureRange"
                        ></input>
                      </form>
                    </div>
                  </li>
                  <li class="list-group-item py-4">
                    <div className="row">
                      <div className="col-8">
                        <h5 className="card-title pl-3 pt-2">Slim schema</h5>
                      </div>
                      <div className="col-4">
                        <a className="btn btn-primary float-right mr-3">
                          Nieuw
                        </a>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item py-4">
                    <div className="row">
                      <div className="col-4 ">
                        <ul className="list-unstyled pl-3">
                          <li>Start: 09:00</li>
                          <li>Eind: 12:00</li>
                        </ul>
                      </div>
                      <div className="col-4">
                        <h2>20</h2>
                      </div>
                      <div className="col-4">
                        <a className="btn btn-outline-danger float-right mr-3">
                          Delete
                        </a>
                      </div>
                    </div>
                  </li>
                  <li class="list-group-item py-4">
                    <div className="row">
                      <div className="col-4 ">
                        <ul className="list-unstyled pl-3">
                          <li>Start: 09:00</li>
                          <li>Eind: 12:00</li>
                        </ul>
                      </div>
                      <div className="col-4">
                        <h2>20</h2>
                      </div>
                      <div className="col-4">
                        <a className="btn btn-outline-danger float-right mr-3">
                          Delete
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RoomDetail;
