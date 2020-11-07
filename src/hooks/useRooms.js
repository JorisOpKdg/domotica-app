import { useEffect, useState } from "react";
import axios from "axios";
import { DB_URL } from "../database/db";

const useRooms = () => {
  const [loading, setLoading] = useState(false);
  const [rooms, setRooms] = useState();
  const [room, setRoom] = useState();

  const getRooms = async (floorId) => {
    setLoading(true);
    try {
      const response = await axios.get(`${DB_URL}/rooms?floorid=${floorId}`);
      setRooms(response.data);
    } catch (error) {
      console.error("Could not load rooms:" + error);
    }  
    setLoading(false);
  }

  const reloadRooms = (floorId) => getRooms(floorId);

  const getRoom = async (roomId) => {
      setRoom(rooms.find(room => room.id === roomId));
  }

  const putRoom = (room) => {
    setLoading(true);
    const { name, description, temperature, lighting, music, curtains } = room;
    try {
      const response = await axios.put(`${DB_URL}/rooms/${room.id}`, {
        name,
        description,
        temperature,
        lighting,
        music,
        curtains,
      });
      reloadRooms();
    } catch (error) {
      console.error("Could not update room:" + error);
    } 
    setLoading(false);
  }

  useEffect(() => {
    getRooms(floorId);
  }, [floorId]);
  

  return { rooms, room, loading , getRooms, reloadRooms, getRoom, putRoom};
};

export default useRooms;
