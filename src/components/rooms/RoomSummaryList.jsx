import { Link } from "react-router-dom";
import MusicOff from "./../../assets/images/music-off.png";
import MusicOn from "./../../assets/images/music-on.png";
import { useState, useContext } from "react";
import { calculateBackgroundColor, calculateTextColor } from "./roomUtilities";
import { ThemeContext } from "./../../contexts/ThemeContext";

const RoomSummaryList = ({ room }) => {
  const { fontSize, showTemperature, showMusic } = useContext(ThemeContext);

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
    <div
      className="card mb-3 shadow-sm text-center"
      style={{ maxWidth: "16rem" , minWidth: "14rem"}}
    >
      <div
        className="card-header"
        style={{ backgroundColor: `${backgroundColor}` }}
        onChange={backgroundColorHandler}
      >
        <h4
          style={{ color: `${textColor}`, fontSize: fontSize }}
          onChange={textColorHandler}
        >
          {room.name}
        </h4>
      </div>

      <div className="card-body">
        {room.temperature !== undefined && showTemperature ? (
          <h4 style={{ fontSize: fontSize }}>{`${room.temperature}°`}</h4>
        ) : null}

        {room.music !== undefined && showMusic ? (
          <img src={room.music < 1 ? MusicOff : MusicOn} alt="Music icon"></img>
        ) : null}
      </div>
      
      <div className="card-footer">
        <Link
          id={room.id}
          className="btn btn-lg btn-block btn-outline-dark mt-3"
          to={`/room-detail/${room.id}`}
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default RoomSummaryList;
