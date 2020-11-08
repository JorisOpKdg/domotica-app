import { Link } from "react-router-dom";
import RangeSlider from "react-bootstrap-range-slider";
import MusicOff from "./../../assets/images/music-off.png";
import MusicOn from "./../../assets/images/music-on.png";
import { useState, useContext, useEffect } from "react";
import { calculateBackgroundColor, calculateTextColor } from "./roomUtilities";
import { ThemeContext } from "./../../contexts/ThemeContext";
import { RoomContext } from "./../../contexts/RoomContext";
import RoomsListSlider from "./RoomsListSlider";

const RoomSummaryList = ({ roomId }) => {
  const { fontSize, showTemperature, showMusic } = useContext(ThemeContext);
  const { readRoom, updateRoom } = useContext(RoomContext);
  const [backgroundColor, setBackgroundColor] = useState();

  const [room, setRoom] = useState();

  useEffect(() => {
    const nextRoom = readRoom(roomId);
    setRoom(nextRoom);
    setBackgroundColor(
      calculateBackgroundColor(nextRoom.lighting, nextRoom.curtains)
    );
  }, [readRoom, roomId]);

  const [textColor, setTextColor] = useState(
    calculateTextColor(backgroundColor)
  );

  const backgroundColorHandler = () => {
    setBackgroundColor(calculateBackgroundColor(room.lighting, room.curtains));
  };

  const textColorHandler = () => {
    setTextColor({ color: calculateTextColor() });
  };

  const tempHandler = (e) => {
    updateRoom({
      ...room,
      temperature: e.target.value,
    });
  };

  const musicHandler = (e) => {
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

  const lightHandler = (e) => {
    updateRoom({
      ...room,
      lighting: e.target.value,
    });
  };

  if (!room) return null;

  return (
    <div className="col-md-6">
      <div
        className="card mb-3 shadow-sm text-center"
        style={{ minHeight: "20rem" }}
      >
        <div
          className="card-header"
          style={{ backgroundColor: `${backgroundColor}` }}
          onChange={backgroundColorHandler}
        >
          <h4
            style={{ color: `${textColor}`, fontSize: `${fontSize}px` }}
            onChange={textColorHandler}
          >
            {room.name}
          </h4>
        </div>

        <div className="card-body">
          {room.temperature !== undefined && showTemperature ? (
            <RoomsListSlider
              fontSize={fontSize}
              title={`${room.temperature}°`}
              value={room.temperature}
              changeHandler={tempHandler}
              min="0"
              max="30"
            />
          ) : null}

          <div className="row">
            <RoomsListSlider
              fontSize={fontSize}
              title="Licht"
              value={room.lighting}
              changeHandler={lightHandler}
              min="0"
              max="20"
            />
          </div>

          {room.music !== undefined && showMusic ? (
            <div className="row mt-5">
              <img
                className="col-2"
                src={room.music < 1 ? MusicOff : MusicOn}
                alt="Music icon"
              ></img>
              <form className="col-10 mt-3">
                <RangeSlider
                  value={room.temperature}
                  min="0"
                  max="20"
                  onChange={musicHandler}
                />
              </form>
            </div>
          ) : null}

          {room.curtains !== undefined ? (
            <div className="row mt-5">
              <h4 className="col-4">Gordijnen</h4>
              <div className=" col-8 colcustom-control custom-switch">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  onClick={curtainHandler}
                  id="curtainSwitch"
                  checked={room.curtains}
                />
                <label className="custom-control-label" htmlFor="curtainSwitch">
                  Aan/Uit
                </label>
              </div>
            </div>
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
    </div>
  );
};

export default RoomSummaryList;
