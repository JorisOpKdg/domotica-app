import axios from "axios";
import { DB_URL } from "./../database/db";

export async function getFloors() {
  try {
    const response = await axios.get(`${DB_URL}/floors`);
    if (response.status >= 200 && response.status <= 299) {
      return response.data;
    } else {
      throw Error(response.statusText);
    }
  } catch (error) {
    console.error("Could not load floors:" + error);
  }
}
