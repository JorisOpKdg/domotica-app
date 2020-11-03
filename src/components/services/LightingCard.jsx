import React, { useEffect, useState } from "react";
import ServiceScheme from "./schemes/ServiceScheme";
import { deleteScheme, getSchemes } from "./../../api/callSchemes";
import { putRoom } from "./../../api/callRooms";
import ServiceCardNewScheme from './ServiceCardNewScheme';

const LightingCard = (props) => {
  const min = 0;
  const max = 30;
  const service = "lighting";
  const [schemes, setSchemes] = useState();
  const [room, setRoom] = useState(props.room);

  useEffect(() => {
    getSchemes(room.id, "lighting").then((nextSchemes) =>
      setSchemes(nextSchemes)
    );
  }, [room.id]);

  const lightingHandler = (e) => {
    setRoom((previousRoom) => ({
      ...previousRoom,
      lighting: e.target.value,
    }));

    putRoom(room, room.id).then();
  };

  const deleteHandler = async () => {
    await deleteScheme(props.scheme.id);
  };

  return (
    <div className="col-lg-6">
      <div className="card mb-3 shadow-sm">
        <div className="card-header pl-5 pt-3">
          <div className="row">
            <div className="col-8">
              <h2 className="my-0 font-weight-normal">Verlichting:</h2>
            </div>
            <div className="col-4">
              <h2 className="text-right pr-4 ">{room.lighting}</h2>
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
                    min={min}
                    max={max}
                    onChange={lightingHandler}
                    value={room.lighting}
                    id="lightingRange"
                  ></input>
                </form>
              </div>
            </li>
            <ServiceCardNewScheme
              room={room}
              service={service}
              deleteHandler={deleteHandler}
            />
            {schemes &&
              schemes.map((scheme) => <ServiceScheme scheme={scheme} />)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LightingCard;
