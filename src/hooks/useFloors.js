import { useEffect, useState } from "react";
import { getFloors } from "./../api/callFloors";
import { useInterval } from "./useInterval";

const useFloors = () => {
  const [floors, setFloors] = useState([]);

  const readAllFloors = async () => {
    getFloors().then((floors) => setFloors(floors));
  };

  const readFloor = (floorId) => {
    return floors.find((floor) => floor.id === floorId);
  };

  useEffect(() => {
    readAllFloors();
  }, []);

  useInterval(() => {
    readAllFloors();
  });

  return { floors, readAllFloors, readFloor };
};

export default useFloors;
