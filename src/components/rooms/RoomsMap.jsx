import React, { useContext, useState, useEffect } from "react";
import RoomSummaryMap from "./RoomSummaryMap";
import RoomsViewNavbar from "./../layout/RoomsViewNavbar";
import { getBackgroundImage } from "./roomUtilities";
import { RoomContext } from "./../../contexts/RoomContext";
import { FloorContext } from "./../../contexts/FloorContext";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";

const RoomsMap = () => {
  const { floorId } = useParams();
  const { readRoomsOfFloor } = useContext(RoomContext);
  const { readFloor } = useContext(FloorContext);

  const [roomsOfFloor, setRoomsOfFloor] = useState([]);
  const [floor, setFloor] = useState();

  useEffect(() => {
    setRoomsOfFloor(readRoomsOfFloor(+floorId));
    setFloor(readFloor(+floorId));
  }, [floorId, readFloor, readRoomsOfFloor]);

  if (!(roomsOfFloor && floor))
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );

  return (
    <Container>
      <RoomsViewNavbar floorId={floor.id} floorName={floor.name} />

      <div
        style={{
          backgroundImage: getBackgroundImage(floor.id),
          backgroundSize: "1200px",
          height: "1400px",
          backgroundPosition: "left",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        {roomsOfFloor.map((room) => (
          <RoomSummaryMap key={room.id} room={room} />
        ))}
      </div>
    </Container>
  );
};

export default RoomsMap;
