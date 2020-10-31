import axios from "axios";
import { DB_URL } from "../../database/db";

export async function getSchemes(roomId, service) {
  try {
    const response = await axios.get(
      `${DB_URL}/schemes?roomId=${roomId}&service=${service}`
    );
    console.log("Response:", response);
    return response.data;
  } catch (error) {
    console.error("Could not retreive:" + error);
  }
}

export async function getScheme(schemeId) {}

export async function postScheme(schemeId) {}

export async function putScheme(schemeId) {}

export async function deleteScheme(schemeId) {
  try {
    //TODO: if response != 200 --> throw error or something
    const response = await axios.delete(`${DB_URL}/schemes/${schemeId}`);
    console.log("Response:", response);
  } catch (error) {
    console.error("Could not delete:" + error);
  }
}
