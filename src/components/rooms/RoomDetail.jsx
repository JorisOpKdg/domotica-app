import React, { useEffect, useContext, useState } from "react";
import Temperature from "../services/Temperature";
import Lighting from "../services/Lighting";
import Music from "../services/Music";
import Curtains from "../services/Curtains";
import { RoomContext } from "./../../contexts/RoomContext";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const RoomDetail = () => {
  const { roomId } = useParams();
  const { readRoom } = useContext(RoomContext);
  const [room, setRoom] = useState();

  useEffect(() => {
    setRoom(readRoom(+roomId));
  }, [readRoom, roomId]);

  if (room === undefined)
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );

  return (
    <Container className="mt-5">
      <h1 className="display-4">{room.name}</h1>
      <p className="mb-5">{room.description}</p>

      <Row className="mb-5">
        {room.temperature !== undefined ? <Temperature room={room} /> : null}

        {room.lighting !== undefined ? <Lighting room={room} /> : null}

        {room.music !== undefined ? <Music room={room} /> : null}

        {room.curtains !== undefined ? <Curtains room={room} /> : null}
      </Row>
    </Container>
  );
};

export default RoomDetail;
