import { Link } from "react-router-dom";
import RangeSlider from "react-bootstrap-range-slider";
import MusicOff from "./../../assets/images/music-off.png";
import MusicOn from "./../../assets/images/music-on.png";
import { useState, useContext, useEffect } from "react";
import { calculateBackgroundColor, calculateTextColor } from "./roomUtilities";
import { ThemeContext } from "./../../contexts/ThemeContext";
import { RoomContext } from "./../../contexts/RoomContext";
import RoomsListSlider from "./RoomsListSlider";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

const RoomSummaryList = ({ roomId }) => {
  const { fontSize, showTemperature, showMusic } = useContext(ThemeContext);
  const { readRoom, updateRoom } = useContext(RoomContext);

  const [backgroundColor, setBackgroundColor] = useState();
  const [textColor, setTextColor] = useState();
  const [room, setRoom] = useState();

  useEffect(() => {
    setRoom(readRoom(roomId));
  }, [readRoom, roomId]);

  useEffect(() => {
    if (!room) return;
    const nextBackground = calculateBackgroundColor(
      room.lighting,
      room.curtains
    );
    const nextTextColor = calculateTextColor(nextBackground);
    setBackgroundColor(nextBackground);
    setTextColor(nextTextColor);
  }, [room]);

  const lightHandler = (e) => {
    setRoom({
      ...room,
      lighting: e.target.value,
    });
  };

  const lightAfterHandler = (e) => {
    updateRoom({
      ...room,
      lighting: e.target.value,
    });
  };

  const tempHandler = (e) => {
    setRoom({
      ...room,
      temperature: e.target.value,
    });
  };

  const tempAfterHandler = (e) => {
    updateRoom({
      ...room,
      temperature: e.target.value,
    });
  };

  const musicHandler = (e) => {
    setRoom({
      ...room,
      music: e.target.value,
    });
  };
  const musicAfterHandler = (e) => {
    updateRoom({
      ...room,
      music: e.target.value,
    });
  };

  const curtainHandler = (e) => {
    updateRoom({
      ...room,
      curtains: !room.curtains,
    });
  };

  if (!room)
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );

  return (
    <Col md={6}>
      <Card
        className="mb-5 shadow-sm text-center"
        style={{ minHeight: "20rem" }}
      >
        <Card.Header style={{ backgroundColor: `${backgroundColor}` }}>
          <h4 style={{ color: `${textColor}`, fontSize: `${fontSize}px` }}>
            {room.name}
          </h4>
        </Card.Header>

        <Card.Body>
          <RoomsListSlider
            fontSize={fontSize}
            title="Licht"
            value={room.lighting}
            changeAfterHandler={lightAfterHandler}
            changeHandler={lightHandler}
            min="0"
            max="20"
          />

          {room.temperature !== undefined && showTemperature ? (
            <RoomsListSlider
              fontSize={fontSize}
              title={`${room.temperature}°`}
              value={room.temperature}
              changeAfterHandler={tempAfterHandler}
              changeHandler={tempHandler}
              min="0"
              max="30"
            />
          ) : null}

          {room.music !== undefined && showMusic ? (
            <Row className="m-2">
              <Col xs={3} className="py-3">
                <img
                  src={room.music < 1 ? MusicOff : MusicOn}
                  alt="Music icon"
                />
              </Col>
              <Col xs={9} className="mt-3">
                <RangeSlider
                  value={room.music}
                  min="0"
                  max="20"
                  onAfterChange={musicAfterHandler}
                  onChange={musicHandler}
                />
              </Col>
            </Row>
          ) : null}

          {room.curtains !== undefined ? (
            <Row className="rm-2 ml-4 text-left">
              <Col xs={4}>
                <h4 style={{ fontSize: `${fontSize}px` }}>Gordijnen</h4>
              </Col>
              <Col xs={8}>
                <Form className="mt-2">
                  <Form.Check
                    type="switch"
                    id={`curtainSwitch${room.id}`}
                    onChange={curtainHandler}
                    checked={room.curtains}
                    label="Dicht/Open"
                  />
                </Form>
              </Col>
            </Row>
          ) : null}
        </Card.Body>

        <Card.Footer>
          <Link
            id={room.id}
            className="btn btn-lg btn-block btn-outline-dark mt-3"
            to={`/room-detail/${room.id}`}
          >
            Details
          </Link>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default RoomSummaryList;
