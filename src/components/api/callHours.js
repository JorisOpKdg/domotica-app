import axios from "axios";
import { DB_URL } from "../../database/db";

export async function getHours() {
  try {
    const response = await axios.get(`${DB_URL}/hours`);
    return response.data;
  } catch (error) {
    console.error("Could not load hours:" + error);
  }
}