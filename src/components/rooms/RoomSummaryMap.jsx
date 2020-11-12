import { useState } from "react";
import { Link } from "react-router-dom";
import MusicOff from "./../../assets/images/music-off.png";
import MusicOn from "./../../assets/images/music-on.png";
import { calculateBackgroundColor, calculateTextColor } from "./roomUtilities";
import Spinner from "react-bootstrap/Spinner";

const RoomSummaryMap = ({ room }) => {
  const [backgroundColor, setBackgroundColor] = useState(
    calculateBackgroundColor(room.lighting)
  );
  const [textColor, setTextColor] = useState(
    calculateTextColor(backgroundColor)
  );

  const backgroundColorHandler = () => {
    setBackgroundColor({
      backgroundColor: calculateBackgroundColor(room.lighting, room.curtains),
    });
  };

  const textColorHandler = () => {
    setTextColor({ color: calculateTextColor() });
  };

  if (!room)
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );

  return (
    <Link
      id={room.id}
      to={`/room-detail/${room.id}`}
      style={{ textDecoration: "none" }}
    >
      <div
        style={{
          position: "absolute",
          top: `${room.top}px`,
          left: `${room.left}px`,
          width: `${room.width}px`,
          height: `${room.height}px`,
          backgroundColor: "white",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          borderRadius: "15px",
        }}
      >
        <div
          onChange={backgroundColorHandler}
          style={{
            backgroundColor: `${backgroundColor}`,
            padding: "10px",
            borderRadius: "15px 15px 0 0",
          }}
        >
          <h4 style={{ color: `${textColor}` }} onChange={textColorHandler}>
            {room.name}
          </h4>
        </div>
        <div style={{ padding: "10px", backgroundColor: "fff" }}>
          {room.temperature !== undefined ? (
            <h4 style={{ color: "000" }}>{`${room.temperature}°`}</h4>
          ) : null}
          {room.music !== undefined ? (
            <img
              src={room.music < 1 ? MusicOff : MusicOn}
              alt="Music icon"
            ></img>
          ) : null}
        </div>
      </div>
    </Link>
  );
};

export default RoomSummaryMap;
