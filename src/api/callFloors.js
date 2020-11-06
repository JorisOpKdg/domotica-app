import axios from "axios";
import { DB_URL } from "./../database/db";

export async function getFloors() {
  try {
    const response = await axios.get(`${DB_URL}/floors`);
    return response.data;
  } catch (error) {
    console.error("Could not load floors:" + error);
  }
}

export async function getFloor(floorId) {
  try {
    const response = await axios.get(`${DB_URL}/floors/${floorId}`);
    return response.data;
  } catch (error) {
    console.error("Could not load rooms:" + error);
  }
}
