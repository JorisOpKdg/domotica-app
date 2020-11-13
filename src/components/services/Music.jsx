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
  const [musicValue, setMusicValue] = useState();

  useEffect(() => {
    const schemes = readSchemesOfRoomWithService(room.id.toString(), service);
    setSchemesOfRoomWithService(schemes);
    setMusicValue(room.music);
  }, [readSchemesOfRoomWithService, room.id, room.music]);

  const musicHandler = (e) => {
    setMusicValue(e.target.value);
  };

  const musicAfterHandler = (e) => {
    updateRoom({
      ...room,
      music: e.target.value,
    });
  };

  if (!schemesOfRoomWithService) return null;

  return (
    <ServiceCard>
      <ServiceCardHeader title={title} value={musicValue} />
      <ServiceCardBody>
        <ServiceCardSlider
          afterChangeHandler={musicAfterHandler}
          changeHandler={musicHandler}
          min={min}
          max={max}
          value={musicValue}
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

export default Music;
