import React, { useContext, useState, useEffect } from "react";
import RoomSummaryList from "./RoomSummaryList";
import RoomsViewNavbar from "./../layout/RoomsViewNavbar";
import { FloorContext } from "./../../contexts/FloorContext";
import { RoomContext } from "./../../contexts/RoomContext";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const RoomsList = () => {
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
      <Row>
        {roomsOfFloor.map((room) => (
          <RoomSummaryList key={room.id} roomId={room.id} />
        ))}
      </Row>
    </Container>
  );
};

export default RoomsList;
