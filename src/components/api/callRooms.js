import axios from "axios";
import { DB_URL } from "../../database/db";

export async function getRooms(floorId) {
  try {
    const response = await axios.get(
      `${DB_URL}/rooms?floorid=${floorId}`
    );
    return response.data;
  } catch (error) {
    console.error("Could not load rooms:" + error);
  }
}

export async function getRoom(roomId) {
  try {
    const response = await axios.get(
      `${DB_URL}/rooms/${roomId}`
    );
    return response.data;
  } catch (error) {
    console.error("Could not load rooms:" + error);
  }
}

export async function postRoom(roomId) {
  // Kan nog uitgewerkt worden
}

export async function putRoom(room, roomId) {
  // Kan nog uitgewerkt worden
}

export async function deleteRoom(roomId) {
  // Kan nog uitgewerkt worden
}
