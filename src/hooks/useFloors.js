import { useEffect, useState } from "react";
import { getFloors } from "./../api/callFloors";
import { useInterval } from "./useInterval";

const useFloors = () => {
  const [loading, setLoading] = useState(false);
  const [floors, setFloors] = useState([]);

  const readAllFloors = async () => {
    setLoading(true);
    getFloors().then((floors) => setFloors(floors));
    setLoading(false);
  };

  const reloadFloors = () => readAllFloors();

  const readFloor = (floorId) => {
    return floors.find((floor) => floor.id === floorId);
  };

  useEffect(() => {
    readAllFloors();
  }, []);

  useInterval(() => {
    readAllFloors();
  }, [2000]);

  return { floors, loading, readAllFloors, reloadFloors, readFloor };
};

export default useFloors;
