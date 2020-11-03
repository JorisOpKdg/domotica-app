import React, { useEffect, useState } from "react";
import ServiceScheme from "./schemes/ServiceScheme";
import { deleteScheme, getSchemes } from "./../../api/callSchemes";
import { putRoom } from "./../../api/callRooms";
import ServiceCardNewScheme from "./ServiceCardNewScheme";

const CurtainsCard = (props) => {
  const service = "curtains";
  const [schemes, setSchemes] = useState();
  const [room, setRoom] = useState(props.room);

  useEffect(() => {
    getSchemes(room.id, "curtains").then((nextSchemes) =>
      setSchemes(nextSchemes)
    );
  }, [room.id]);

  const curtainHandler = (e) => {
    setRoom((previousRoom) => ({
      ...previousRoom,
      curtains: !previousRoom.curtains,
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
            <h2 className="my-0 font-weight-normal">Gordijnen:</h2>
          </div>
          <div className="col-4">
              <h2 className="text-right pr-4 ">
                {room.curtains ? "Open" : "Dicht"}
              </h2>
            </div>
          </div>
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item py-4">
              <form className="form-right my-2 my-lg-0 col-12">
                <div className="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="curtainSwitch"
                    onClick={curtainHandler}
                  />
                  <label className="custom-control-label" for="curtainSwitch">
                    Aan/Uit
                  </label>
                </div>
              </form>
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

export default CurtainsCard;
