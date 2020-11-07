import axios from "axios";
import { DB_URL } from "./../database/db";

export async function getRooms() {
  try {
    const response = await axios.get(`${DB_URL}/rooms`);
    if (response.status >= 200 && response.status <= 299) {
      return response.data;
    } else {
      throw Error(response.statusText);
    }
  } catch (error) {
    console.error("Could not load rooms:" + error);
  }
}

export async function postRoom(room) {
  const { name, description, temperature, lighting, music, curtains } = room;
  try {
    const response = await axios.post(`${DB_URL}/rooms`, {
      name,
      description,
      temperature,
      lighting,
      music,
      curtains,
    });
    if (response.status >= 200 && response.status <= 299) {
      return response.data;
    } else {
      throw Error(response.statusText);
    }
  } catch (error) {
    console.error("Could not post room:" + error);
  }
}

export async function putRoom(room) {
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
    if (response.status >= 200 && response.status <= 299) {
      return response.data;
    } else {
      throw Error(response.statusText);
    }
  } catch (error) {
    console.error("Could not update room:" + error);
  }
}
