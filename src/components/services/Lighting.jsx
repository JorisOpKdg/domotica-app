import React, { useEffect, useState, useContext } from "react";
import ServiceScheme from "./schemes/ServiceScheme";
import ServiceCardNewScheme from "./cards/ServiceCardNewScheme";
import { createTitle } from "./serviceUtilities";
import ServiceCard from "./cards/ServiceCard";
import ServiceCardHeader from "./cards/ServiceCardHeader";
import ServiceCardSlider from "./cards/ServiceCardSlider";
import ServiceCardBody from "./cards/ServiceCardBody";
import { RoomContext } from "./../../contexts/RoomContext";
import { SchemeContext } from "./../../contexts/SchemeContext";

const service = "lighting";
const min = 0;
const max = 30;
const title = createTitle(service);

const Lighting = ({ room }) => {
  const { readSchemesOfRoomWithService } = useContext(SchemeContext);
  const { updateRoom } = useContext(RoomContext);
  
  const [schemesOfRoomWithService, setSchemesOfRoomWithService] = useState();
  const [lightingValue, setLightingValue] = useState();

  useEffect(() => {
    const schemes = readSchemesOfRoomWithService(room.id.toString(), service);
    setSchemesOfRoomWithService(schemes);
    setLightingValue(room.lighting);
  }, [readSchemesOfRoomWithService, room.id, room.lighting]);

  const lightingHandler = (e) => {
    setLightingValue(e.target.value);
  };

  const lightingAfterHandler = (e) => {
    updateRoom({
      ...room,
      lighting: e.target.value,
    });
  };

  if (!schemesOfRoomWithService) return null;

  return (
    <ServiceCard>
      <ServiceCardHeader title={title} value={lightingValue} />
      <ServiceCardBody>
        <ServiceCardSlider
          afterChangeHandler={lightingAfterHandler}
          changeHandler={lightingHandler}
          min={min}
          max={max}
          value={lightingValue}
        />
        <ServiceCardNewScheme roomId={room.id} service={service} />
        {schemesOfRoomWithService && schemesOfRoomWithService.length === 0 && (
          <p className="ml-4" style={{ fontStyle: "italic" }}>
            Je hebt nog geen slimschema toegevoegd.
          </p>
        )}
        {schemesOfRoomWithService &&
          schemesOfRoomWithService.map((scheme) => (
            <ServiceScheme key={scheme.id} roomId={room.id} scheme={scheme} />
          ))}
      </ServiceCardBody>
    </ServiceCard>
  );
};

export default Lighting;
