import React, { useEffect, useContext, useState } from "react";
import ServiceScheme from "./schemes/ServiceScheme";
import ServiceCardNewScheme from "./cards/ServiceCardNewScheme";
import { createTitle } from "./serviceUtilities";
import ServiceCard from "./cards/ServiceCard";
import ServiceCardHeader from "./cards/ServiceCardHeader";
import ServiceCardSlider from "./cards/ServiceCardSlider";
import ServiceCardBody from "./cards/ServiceCardBody";
import { SchemeContext } from "./../../contexts/SchemeContext";
import { RoomContext } from "./../../contexts/RoomContext";

const service = "temperature";
const title = createTitle(service);
const min = 0;
const max = 30;

const Temperature = ({ room }) => {
  const { readSchemesOfRoomWithService } = useContext(SchemeContext);
  const { updateRoom } = useContext(RoomContext);
  const [SchemesOfRoomWithService, setSchemesOfRoomWithService] = useState();

  useEffect(() => {
    setSchemesOfRoomWithService(readSchemesOfRoomWithService(room.id, service));
  }, [readSchemesOfRoomWithService, room.id]);

  const temperatureHandler = (e) => {
    updateRoom((previousRoom) => ({
      ...previousRoom,
      Lighting: e.target.value,
    }));
  };

  return (
    <ServiceCard>
      <ServiceCardHeader title={title} value={room.temperature} />
      <ServiceCardBody>
        <ServiceCardSlider
          clickHandler={temperatureHandler}
          min={min}
          max={max}
        />
        <ServiceCardNewScheme room={room.id} service={service} />
        {SchemesOfRoomWithService &&
          SchemesOfRoomWithService.map((scheme) => (
            <ServiceScheme roomId={room.id} scheme={scheme} />
          ))}
      </ServiceCardBody>
    </ServiceCard>
  );
};

export default Temperature;
