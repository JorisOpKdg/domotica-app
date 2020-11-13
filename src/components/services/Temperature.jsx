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
  
  const [schemesOfRoomWithService, setSchemesOfRoomWithService] = useState();
  const [tempValue, setTempValue] = useState();

  useEffect(() => {
    const schemes = readSchemesOfRoomWithService(room.id.toString(), service);
    setSchemesOfRoomWithService(schemes);
    setTempValue(room.temperature);
  }, [readSchemesOfRoomWithService, room.id, room.temperature]);

  const temperatureHandler = (e) => {
    setTempValue(e.target.value);
  };

  const temperatureAfterHandler = (e) => {
    updateRoom({
      ...room,
      temperature: e.target.value,
    });
  };

  if (!schemesOfRoomWithService) return null;

  return (
    <ServiceCard>
      <ServiceCardHeader title={title} value={`${tempValue}°`} />
      <ServiceCardBody>
        <ServiceCardSlider
          afterChangeHandler={temperatureAfterHandler}
          changeHandler={temperatureHandler}
          min={min}
          max={max}
          value={tempValue}
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

export default Temperature;
