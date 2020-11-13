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
  const [curtainValue, setCurtainValue] = useState();

  useEffect(() => {
    const schemes = readSchemesOfRoomWithService(room.id.toString(), service);
    setSchemesOfRoomWithService(schemes);
    setCurtainValue(room.curtains);
  }, [readSchemesOfRoomWithService, room.curtains, room.id]);

  const curtainHandler = () => {
    const newCurtainValue = !room.curtains;
    setCurtainValue(newCurtainValue);
    updateRoom({
      ...room,
      curtains: newCurtainValue,
    });
  };

  if (!schemesOfRoomWithService) return null;

  return (
    <ServiceCard>
      <ServiceCardHeader
        title={title}
        value={curtainValue ? "Open" : "Dicht"}
      />
      <ServiceCardBody>
        <ServiceCardCheckBox
          changeHandler={curtainHandler}
          checkedValue={curtainValue}
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

export default Curtains;
