import React, { useEffect, useState, useContext } from "react";
import ServiceScheme from "./schemes/ServiceScheme";
import ServiceCardNewScheme from "./cards/ServiceCardNewScheme";
import { createTitle } from "./serviceUtilities";
import ServiceCard from "./cards/ServiceCard";
import ServiceCardHeader from "./cards/ServiceCardHeader";
import ServiceCardSlider from "./cards/ServiceCardSlider";
import ServiceCardBody from "./cards/ServiceCardBody";
import { SchemeContext } from "./../../contexts/SchemeContext";
import { RoomContext } from "./../../contexts/RoomContext";

const service = "music";
const title = createTitle(service);
const min = 0;
const max = 20;

const Music = ({ room }) => {
  const { readSchemesOfRoomWithService } = useContext(SchemeContext);
  const { updateRoom } = useContext(RoomContext);
  const [schemesOfRoomWithService, setSchemesOfRoomWithService] = useState();

  useEffect(() => {
    const schemes = readSchemesOfRoomWithService(room.id.toString(), service);
    setSchemesOfRoomWithService(schemes);
  }, [readSchemesOfRoomWithService, room.id]);

  const musicHandler = (e) => {
    updateRoom((previousRoom) => ({
      ...previousRoom,
      Lighting: e.target.value,
    }));
  };

  return (
    <ServiceCard>
      <ServiceCardHeader title={title} value={room.music} />
      <ServiceCardBody>
        <ServiceCardSlider clickHandler={musicHandler} min={min} max={max} />
        <ServiceCardNewScheme roomId={room.id} service={service} />
        {schemesOfRoomWithService &&
          schemesOfRoomWithService.map((scheme) => (
            <ServiceScheme key={scheme.id} roomId={room.id} scheme={scheme} />
          ))}
      </ServiceCardBody>
    </ServiceCard>
  );
};

export default Music;
