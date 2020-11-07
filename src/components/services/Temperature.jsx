import React, { useEffect } from "react";
import ServiceScheme from "./schemes/ServiceScheme";
import ServiceCardNewScheme from "./cards/ServiceCardNewScheme";
import { createTitle } from "./serviceUtilities";
import ServiceCard from "./cards/ServiceCard";
import ServiceCardHeader from "./cards/ServiceCardHeader";
import ServiceCardSlider from "./cards/ServiceCardSlider";
import ServiceCardBody from "./cards/ServiceCardBody";

const Temperature = () => {
  const service = "temperature";
  const title = createTitle(service);
  const min = 0;
  const max = 30;
  const { room, putRoom } = useContext(RoomContext);
  const { schemes, getSchemes } = useContext(SchemeContext);

  useEffect(() => {
    getSchemes(room.id, service);
  }, [room.id, service]);

  const temperatureHandler = () => {
    putRoom((previousRoom) => ({
      ...previousRoom,
      curtains: !previousRoom.curtains,
    }));
  };

  return (
    <ServiceCard>
      <ServiceCardHeader title={title} value={room.music} />
      <ServiceCardBody>
        <ServiceCardSlider
          clickHandler={temperatureHandler}
          min={min}
          max={max}
        />
        <ServiceCardNewScheme
          room={room}
          service={service}
        />
        {schemes && schemes.map((scheme) => <ServiceScheme scheme={scheme} />)}
      </ServiceCardBody>
    </ServiceCard>
  );
};

export default Temperature;
