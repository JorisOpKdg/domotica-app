import { Link } from "react-router-dom";
import MusicOff from "./../../assets/images/music-off.png";
import MusicOn from "./../../assets/images/music-on.png";
import { useState } from "react";
import { calculateBackgroundColor, calculateTextColor } from "./roomUtilities";

const RoomSummaryList = ({ room, floorId, absolutePosition }) => {
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
          {room.temperature !== undefined ? (
            <h4>{`Temperatuur: ${room.temperature}°`}</h4>
          ) : null}

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

export default RoomSummaryList;
