import React, { useContext } from "react";
import RoomSummaryList from "./RoomSummaryList";
import RoomsViewNavbar from "./../layout/RoomsViewNavbar";
import { FloorContext } from "./../../contexts/FloorContext";
import { RoomContext } from './../../contexts/RoomContext';

const RoomsList = (props) => {
  const { floorId } = props.match.params;
  const { rooms, reloadRooms } = useContect(RoomContext);
  const { floor, getFloor } = useContext(FloorContext);

  useEffect(() => {
    reloadRooms(floorId);
    getFloor(floorId);
  }, [floorId]);

  if (!(rooms && floor)) return null;

  return (
    <div className="container">
      <RoomsViewNavbar floorId={floor.id} floorName={floor.floorName} />

      <div className="row">
        {rooms.map((room) => (
          <RoomSummaryList
            absolutePosition={false}
            key={room.id}
            floorId={floor.id}
            room={room}
          />
        ))}
      </div>
    </div>
  );
};

export default RoomsList;
