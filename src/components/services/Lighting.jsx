import React, { useEffect, useState } from "react";
import ServiceScheme from "./schemes/ServiceScheme";
import ServiceCardNewScheme from "./cards/ServiceCardNewScheme";
import { createTitle } from "./serviceUtilities";
import ServiceCard from "./cards/ServiceCard";
import ServiceCardHeader from "./cards/ServiceCardHeader";
import ServiceCardSlider from "./cards/ServiceCardSlider";
import ServiceCardBody from "./cards/ServiceCardBody";

const Lighting = () => {
  const service = "lighting";
  const title = createTitle(service);
  const min = 0;
  const max = 30;
  const { room, putRoom } = useContext(RoomContext);
  const { schemes, getSchemes } = useContext(SchemeContext);

  useEffect(() => {
    getSchemes(room.id, service);
  }, [room.id, service]);

  const lightingHandler = () => {
    putRoom((previousRoom) => ({
      ...previousRoom,
      curtains: !previousRoom.curtains,
    }));
  };

  return (
    <ServiceCard>
      <ServiceCardHeader title={title} value={room.lighting} />
      <ServiceCardBody>
        <ServiceCardSlider clickHandler={lightingHandler} min={min} max={max} />
        <ServiceCardNewScheme
          room={room}
          service={service}
        />
        {schemes && schemes.map((scheme) => <ServiceScheme scheme={scheme} />)}
      </ServiceCardBody>
    </ServiceCard>
  );
};

export default Lighting;
