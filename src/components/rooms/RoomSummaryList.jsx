import { Link } from "react-router-dom";
import RangeSlider from "react-bootstrap-range-slider";
import MusicOff from "./../../assets/images/music-off.png";
import MusicOn from "./../../assets/images/music-on.png";
import { useState, useContext, useEffect } from "react";
import { calculateBackgroundColor, calculateTextColor } from "./roomUtilities";
import { ThemeContext } from "./../../contexts/ThemeContext";
import { RoomContext } from "./../../contexts/RoomContext";
import RoomsListSlider from "./RoomsListSlider";
import Spinner from 'react-bootstrap/Spinner'

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
    <div className="col-md-6">
      <div
        className="card mb-5 shadow-sm text-center"
        style={{ minHeight: "20rem" }}
      >
        <div
          className="card-header"
          style={{ backgroundColor: `${backgroundColor}` }}
        >
          <h4 style={{ color: `${textColor}`, fontSize: `${fontSize}px` }}>
            {room.name}
          </h4>
        </div>

        <div className="card-body">
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
            <div className="row m-2">
              <div className="col-3 py-3">
                <img
                  src={room.music < 1 ? MusicOff : MusicOn}
                  alt="Music icon"
                ></img>
              </div>
              <form className="col-9 mt-3">
                <RangeSlider
                  value={room.music}
                  min="0"
                  max="20"
                  onAfterChange={musicAfterHandler}
                  onChange={musicHandler}
                />
              </form>
            </div>
          ) : null}

          {room.curtains !== undefined ? (
            <div className="row m-2 ml-4 text-left">
              <h4 className="col-4" style={{ fontSize: `${fontSize}px` }}>
                Gordijnen
              </h4>
              <div className=" col-8 colcustom-control custom-switch">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  onChange={curtainHandler}
                  id={`curtainSwitch${room.id}`}
                  checked={room.curtains}
                />
                <label
                  className="custom-control-label"
                  htmlFor={`curtainSwitch${room.id}`}
                >
                  Dicht/Open
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
