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

const Curtains = () => {
  const service = "curtains";
  const title = createTitle(service);
  const { room, putRoom } = useContext(RoomContext);
  const { schemes, getSchemes} = useContext(SchemeContext);

  useEffect(() => {
    getSchemes(room.id, service);
  }, [room.id, service]);

  const curtainHandler = () => {
    putRoom((previousRoom) => ({
      ...previousRoom,
      curtains: !previousRoom.curtains,
    }));
  };

  return (
    <ServiceCard>
      <ServiceCardHeader
        title={title}
        value={room.curtains ? "Open" : "Dicht"}
      />
      <ServiceCardBody>
        <ServiceCardCheckBox clickHandler={curtainHandler} />
        <ServiceCardNewScheme
          room={room}
          service={service}
        />
        {schemes && schemes.map((scheme) => <ServiceScheme scheme={scheme} />)}
      </ServiceCardBody>
    </ServiceCard>
  );
};

export default Curtains;
