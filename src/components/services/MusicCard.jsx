import React, { useEffect, useState } from "react";
import { getSchemes } from "../api/callSchemes";
import SmartScheme from "./SmartScheme";
import { Link } from "react-router-dom";

const MusicCard = (props) => {
  const [schemes, setSchemes] = useState();
  const [room, setRoom] = useState(props.room);

  useEffect(() => {
    getSchemes(room.id, "music").then((nextSchemes) => setSchemes(nextSchemes));
  }, [room.id]);

  const musicHandler = (e) => {
    setRoom((previousRoom) => ({
      ...previousRoom,
      music: e.target.value,
    }));
  };

  return (
    <div className="col-lg-6">
      <div className="card mb-3 shadow-sm">
        <div className="card-header pl-5 pt-3">
          <div className="row">
            <div className="col-8">
              <h2 className="my-0 font-weight-normal">Muziek:</h2>
            </div>
            <div className="col-4">
              <h2 className="text-right pr-4 ">{room.music}</h2>
            </div>
          </div>
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item py-2">
              <div className="row">
                <form className="m-3 col-11">
                  <input
                    type="range"
                    className="custom-range"
                    min="0"
                    max="20"
                    onChange={musicHandler}
                    value={room.music}
                    id="musicRange"
                  ></input>
                </form>
              </div>
            </li>
            <li className="list-group-item py-4">
              <div className="row">
                <div className="col-8">
                  <h5 className="card-title pl-3 pt-2">Slim schema</h5>
                </div>
                <div className="col-4">
                  <Link
                    key="new-scheme-music"
                    className="btn btn-primary float-right mr-3"
                    to={`/new-smart-scheme?roomId=${room.id}&service=music`}
                    roomId={room.id}
                    service={"music"}
                  >
                    Nieuw
                  </Link>
                </div>
              </div>
            </li>
            {schemes &&
              schemes.map((scheme) => <SmartScheme scheme={scheme} />)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
