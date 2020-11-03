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

export async function postFloor(floorId) {
  // Kan nog uitgewerkt worden
}

export async function putFloor(floorId) {
  // Kan nog uitgewerkt worden
}

export async function deleteFloor(floorId) {
  // Kan nog uitgewerkt worden
}
