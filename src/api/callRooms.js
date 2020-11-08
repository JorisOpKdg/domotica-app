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

export async function putRoom({ id, ...room }) {
  try {
    const response = await axios.put(`${DB_URL}/rooms/${id}`, room);
    if (response.status >= 200 && response.status <= 299) {
      return response.data;
    } else {
      throw Error(response.statusText);
    }
  } catch (error) {
    console.error("Could not update room:" + error);
  }
}
