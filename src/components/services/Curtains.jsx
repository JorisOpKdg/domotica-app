import React, { useContext, useEffect, useState } from "react";
import ServiceCardNewScheme from "./cards/ServiceCardNewScheme";
import ServiceScheme from "./schemes/ServiceScheme";
import ServiceCard from "./cards/ServiceCard";
import ServiceCardHeader from "./cards/ServiceCardHeader";
import ServiceCardBody from "./cards/ServiceCardBody";
import ServiceCardCheckBox from "./cards/ServiceCardCheckBox";
import { createTitle } from "./serviceUtilities";
import { SchemeContext } from "./../../contexts/SchemeContext";
import { RoomContext } from "./../../contexts/RoomContext";

const service = "curtains";
const title = createTitle(service);

const Curtains = ({ room }) => {
  const { readSchemesOfRoomWithService } = useContext(SchemeContext);
  const { updateRoom } = useContext(RoomContext);
  const [schemesOfRoomWithService, setSchemesOfRoomWithService] = useState();

  useEffect(() => {
    const schemes = readSchemesOfRoomWithService(room.id.toString(), service);
    setSchemesOfRoomWithService(schemes);
  }, [readSchemesOfRoomWithService, room.id]);

  const curtainHandler = () => {
    updateRoom({
      ...room,
      curtains: !room.curtains,
    });
  };

  return (
    <ServiceCard>
      <ServiceCardHeader
        title={title}
        value={room.curtains ? "Open" : "Dicht"}
      />
      <ServiceCardBody>
        <ServiceCardCheckBox clickHandler={curtainHandler} />
        <ServiceCardNewScheme roomId={room.id} service={service} />
        {schemesOfRoomWithService &&
          schemesOfRoomWithService.map((scheme) => (
            <ServiceScheme key={scheme.id} roomId={room.id} scheme={scheme} />
          ))}
      </ServiceCardBody>
    </ServiceCard>
  );
};

export default Curtains;
