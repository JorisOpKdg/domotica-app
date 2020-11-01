import { Link } from "react-router-dom";
import MusicOff from "./../../assets/images/music-off.png";
import MusicOn from "./../../assets/images/music-on.png";
import { useState } from "react";

const RoomSummary = ({ room, floorId }) => {
  // When curtains are closed and the lighting = 0, make backgroundColor black
  // When curtains are open and the lighting = 0, make backgroundColor white
  // When curtains are open and the lighting < 1, make backgroundColor yellow
  const calculateBackgroundColor = (alfa) => {
    if (!room.curtains && alfa < 1) {
      return "#000";
    }
    return `rgba(255, 165, 0,${alfa / 10}`;
  };

  // When black background, return white color
  const calculateTextColor = (backgroundColor) => {
    if (backgroundColor === "#000") {
      return "#fff";
    }
    return "#000";
  };

  const [backgroundColor, setBackgroundColor] = useState(
    calculateBackgroundColor(room.lighting)
  );
  const [textColor, setTextColor] = useState(
    calculateTextColor(backgroundColor)
  );

  const backgroundColorHandler = () => {
    const alfa = room.lighting;
    setBackgroundColor({ backgroundColor: calculateBackgroundColor(alfa) });
  };

  const textColorHandler = () => {
    setTextColor({ color: calculateTextColor() });
  };

  return (
    <div className="col-md-6 col-lg-3">
      <div className="card mb-3 shadow-sm">
        <div
          className="card-header"
          style={{ backgroundColor: `${backgroundColor}` }}
          onChange={backgroundColorHandler}
        >
          <h4 style={{ color: `${textColor}` }} onChange={textColorHandler}>
            {room.name}
          </h4>
        </div>
        <div className="card-body ">
          {room.temperature !== undefined ? <h4>{`Temperatuur: ${room.temperature}° Ingesteld op: ${room.desiredTemp}°`}</h4> : null}
          <img src={room.music < 1 ? MusicOff : MusicOn} alt="Music icon"></img>
          <Link
            id={room.id}
            className="btn btn-lg btn-block btn-outline-dark mt-3"
            to={`/room-detail/${floorId}/${room.id}`}
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomSummary;
