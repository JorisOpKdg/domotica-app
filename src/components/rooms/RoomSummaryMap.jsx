import { useState } from "react";
import { Link } from "react-router-dom";
import MusicOff from "./../../assets/images/music-off.png";
import MusicOn from "./../../assets/images/music-on.png";
import { calculateBackgroundColor, calculateTextColor } from "./roomUtilities";

const RoomSummaryMap = ({ room, floorId }) => {
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

  if (!room) return null;

  return (
    <Link
      id={room.id}
      to={`/room-detail/${floorId}/${room.id}`}
      style={{textDecoration: "none"}}
      
    >
      <div
        onChange={backgroundColorHandler}
        style={{
          position: "absolute",
          top: `${room.top}px`,
          left: `${room.left}px`,
          width: "180px",
          height: "140px",
          backgroundColor: `${backgroundColor}`,
          border: "black solid",
          padding: "10px",
        }}
      >
        <h4 style={{ color: `${textColor}` }} onChange={textColorHandler}>
          {room.name}
        </h4>
        {room.temperature !== undefined ? (
          <h4 onChange={textColorHandler} style={{color: textColor}}>{`${room.temperature}°`}</h4>
        ) : null}
        <div style={{backgroundColor: "000"}}>
        <img src={room.music < 1 ? MusicOff : MusicOn} alt="Music icon"></img>
        </div>
      </div>
    </Link>
  );
};

export default RoomSummaryMap;
