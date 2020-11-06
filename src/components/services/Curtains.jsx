import React, { useEffect, useState } from "react";
import { deleteScheme, getSchemes } from "../../api/callSchemes";
import { putRoom } from "../../api/callRooms";
import ServiceCardNewScheme from "./cards/ServiceCardNewScheme";
import ServiceScheme from "./schemes/ServiceScheme";
import ServiceCard from "./cards/ServiceCard";
import ServiceCardHeader from "./cards/ServiceCardHeader";
import ServiceCardBody from "./cards/ServiceCardBody";
import ServiceCardCheckBox from "./cards/ServiceCardCheckBox";
import { createTitle } from "./serviceUtilities";

const Curtains = (props) => {
  const service = "curtains";
  const title = createTitle(service);
  const [schemes, setSchemes] = useState();
  const [room, setRoom] = useState(props.room);

  useEffect(() => {
    getSchemes(room.id, "curtains").then((nextSchemes) =>
      setSchemes(nextSchemes)
    );
  }, [room.id]);

  const curtainHandler = (e) => {
    setRoom((previousRoom) => ({
      ...previousRoom,
      curtains: !previousRoom.curtains,
    }));

    putRoom(room);
  };

  const deleteHandler = async () => {
    await deleteScheme(props.scheme.id);
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
          deleteHandler={deleteHandler}
        />
        {schemes && schemes.map((scheme) => <ServiceScheme scheme={scheme} />)}
      </ServiceCardBody>
    </ServiceCard>
  );
};

export default Curtains;

