import axios from "axios";
import { DB_URL } from "./../database/db";

export async function getRooms(floorId) {
  try {
    const response = await axios.get(`${DB_URL}/rooms?floorid=${floorId}`);
    return response.data;
  } catch (error) {
    console.error("Could not load rooms:" + error);
  }
}

export async function getRoom(roomId) {
  try {
    const response = await axios.get(`${DB_URL}/rooms/${roomId}`);
    return response.data;
  } catch (error) {
    console.error("Could not load rooms:" + error);
  }
}

export async function postRoom(roomId) {
  // Kan nog uitgewerkt worden
}

export async function putRoom(room) {
  const { name, description, temperature, lighting, music, curtains } = room;
  try {
    const response = await axios.post(`${DB_URL}/schemes/${room.id}`, {
      name,
      description,
      temperature,
      lighting,
      music,
      curtains,
    });
    console.log("Response:", response);
  } catch (error) {
    console.error("Could not update room:" + error);
  }
}
