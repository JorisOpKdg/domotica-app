import React, { useEffect, useState } from "react";
import ServiceScheme from "./schemes/ServiceScheme";
import { deleteScheme, getSchemes } from "../../api/callSchemes";
import { putRoom } from "../../api/callRooms";
import ServiceCardNewScheme from "./cards/ServiceCardNewScheme";
import { createTitle } from "./serviceUtilities";
import ServiceCard from "./cards/ServiceCard";
import ServiceCardHeader from "./cards/ServiceCardHeader";
import ServiceCardSlider from "./cards/ServiceCardSlider";
import ServiceCardBody from "./cards/ServiceCardBody";

const Lighting = (props) => {
  const service = "lighting";
  const title = createTitle(service);
  const min = 0;
  const max = 30;
  const [schemes, setSchemes] = useState();
  const [room, setRoom] = useState(props.room);

  useEffect(() => {
    getSchemes(room.id, "lighting").then((nextSchemes) =>
      setSchemes(nextSchemes)
    );
  }, [room.id]);

  const lightingHandler = (e) => {
    setRoom((previousRoom) => ({
      ...previousRoom,
      lighting: e.target.value,
    }));

    putRoom(room);
  };

  const deleteHandler = async () => {
    await deleteScheme(props.scheme.id);
  };

  return (
    <ServiceCard>
      <ServiceCardHeader title={title} value={room.lighting} />
      <ServiceCardBody>
        <ServiceCardSlider clickHandler={lightingHandler} min={min} max={max} />
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

export default Lighting;
