import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { DB_URL } from "../database/db";
import RoomsViewNav from "./RoomsViewNav";

// Dit is een voorbeeld van een functional component
const Rooms = () => {
  const [currentFloor, setCurrentFloor] = useState();

  useEffect(() => {
    const getFloor = async () => {
      try {
        const response = await axios.get(
          `${DB_URL}/${this.props.match.params.floorId}`
        );
        setCurrentFloor(response.data);
      } catch (error) {
        console.log("Could not load floors! " + error);
      }
    };
    getFloor();
  }, []);

  return (
    <>
      <RoomsViewNav />

      <div class="container">
        <div className="card-deck mb-3 text-center">
          {currentFloor.rooms.map((room) => {
            <div className="card mb-4 shadow-sm">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">{room.name}</h4>
              </div>
              <div className="card-body">
                <ul className="list-unstyled mt-3 mb-4">
                  <li>Temperatuur: {room.temperatuur}</li>
                  <li>Verlichting: {room.verlichting}</li>
                  <li>Muziek: {room.muziek}</li>
                  <li>Gordijnen: {room.gordijnen}</li>
                </ul>
                <Link
                  className="btn btn-lg btn-block btn-outline-primary"
                  to={`/${this.props.match.params.floorId}/${this.props.match.params.floorId}`}
                >
                  Details
                </Link>
              </div>
            </div>;
          })}
        </div>
      </div>
      <div class="container"></div>
    </>
  );
};

export default Rooms;
