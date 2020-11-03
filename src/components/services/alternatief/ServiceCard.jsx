import React, { useEffect, useState } from "react";
import ServiceScheme from "../schemes/ServiceScheme";
import { putRoom } from "../../../api/callRooms";
import { deleteScheme, getSchemes } from "../../../api/callSchemes";
import { createTitle, getMinMax } from "../../utilities";
import ServiceCardHeader from "./ServiceCardHeader";
import ServiceCardTempSlider from "./ServiceCardTempSlider";
import ServiceCardNewScheme from "./ServiceCardNewScheme";
import ServiceCardLiMuSlider from "./ServiceCardLiMuSlider";
import ServiceCardCurtainSlider from "./ServiceCardCurtainSlider";

const ServiceCard = (props) => {
  const service = props.service;
  const { min, max } = getMinMax(service);
  const title = createTitle(service);

  const [schemes, setSchemes] = useState();
  const [room, setRoom] = useState(props.room);

  useEffect(() => {
    getSchemes(room.id, service).then((nextSchemes) => setSchemes(nextSchemes));
  }, [room.id, service]);

  const desiredTempHandler = (e) => {
    setRoom((previousRoom) => ({
      ...previousRoom,
      desiredTemp: e.target.value,
    }));

    putRoom(room, room.id).then();
  };

  const musicHandler = (e) => {
    setRoom((previousRoom) => ({
      ...previousRoom,
      music: e.target.value,
    }));

    putRoom(room, room.id).then();
  };

  const lightingHandler = (e) => {
    setRoom((previousRoom) => ({
      ...previousRoom,
      lighting: e.target.value,
    }));

    putRoom(room, room.id).then();
  };

  const curtainHandler = (e) => {
    setRoom((previousRoom) => ({
      ...previousRoom,
      curtains: !previousRoom.curtains,
    }));

    putRoom(room, room.id).then();
  };

  const decideServiceCardSlider = (service) => {
    switch (service) {
      case "temperature":
        return (
          <ServiceCardTempSlider
            min={min}
            max={max}
            valueHandler={desiredTempHandler}
            room={room}
          />
        );
      case "music":
        return (
          <ServiceCardLiMuSlider
            min={min}
            max={max}
            valueHandler={musicHandler}
            room={room}
          />
        );
      case "lighting":
        return (
          <ServiceCardLiMuSlider
            min={min}
            max={max}
            valueHandler={lightingHandler}
            room={room}
          />
        );
      case "curtains":
        return (
          <ServiceCardCurtainSlider valueHandler={curtainHandler} room={room} />
        );

      default:
        return undefined;
    }
  };

  const deleteHandler = async () => {
    await deleteScheme(props.scheme.id);
  };

  return (
    <div className="col-lg-6">
      <div className="card mb-3 shadow-sm">
        <ServiceCardHeader
          title={title}
          serviceValue={"HIER MOET IK NOG ZIEN HOE DAT MOET"}
          service={service}
        />
        <div className="card-body">
          <ul className="list-group list-group-flush">
            {decideServiceCardSlider()}

            <ServiceCardNewScheme
              room={room}
              service={service}
              deleteHandler={deleteHandler}
            />

            {schemes &&
              schemes.map((scheme) => (
                <ServiceScheme scheme={scheme} min={min} max={max} />
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
