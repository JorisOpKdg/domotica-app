import axios from "axios";
import { DB_URL } from "../../database/db";

export async function getSchemes(roomId, service) {
  try {
    const response = await axios.get(
      `${DB_URL}/schemes?roomId=${roomId}&service=${service}`
    );
    return response.data;
  } catch (error) {
    console.error("Could not retreive:" + error);
  }
}

export async function getScheme(schemeId) {
  // Kan nog uitgewerkt worden
}

export async function postScheme(scheme) {
  const { roomId, service, amount, start, end } = scheme;
  try {
    const response = await axios.post(`${DB_URL}/schemes`, {
      roomId,
      service,
      amount,
      start,
      end,
    });
    console.log("Response:", response);
  } catch (error) {
    console.error("Could not create new todo:" + error);
  }
}

export async function putScheme(schemeId) {
  // Kan nog uitgewerkt worden
}

export async function deleteScheme(schemeId) {
  try {
    //TODO: if response != 200 --> throw error or something
    const response = await axios.delete(`${DB_URL}/schemes/${schemeId}`);
    console.log("Response:", response);
  } catch (error) {
    console.error("Could not delete:" + error);
  }
}
