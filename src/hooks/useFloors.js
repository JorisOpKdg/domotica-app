import { useEffect, useState } from "react";
import axios from "axios";
import { DB_URL } from "../database/db";

const useFloors = () => {
  const [loading, setLoading] = useState(false);
  const [floors, setFloors] = useState();
  const [floor, setFloor] = useState();

  const getFloors = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${DB_URL}/floors`);
      setFloors(response.data);
    } catch (error) {
      console.error("Could not load floors:" + error);
    }
    setLoading(false);
  };

  const getFloor = (floorId) => {
    setFloor(floors.find(floor => floor.id === floorId));
  };

  useEffect(() => {
    getFloors();
  }, []);

  return { floors, floor, loading, getFloors, getFloor };
};

export default useFloors;
