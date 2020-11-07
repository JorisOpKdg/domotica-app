import axios from "axios";
import { DB_URL } from "./../database/db";

export async function getSchemes() {
  try {
    const response = await axios.get(`${DB_URL}/schemes`);
    if (response.status >= 200 && response.status <= 299) {
      return response.data;
    } else {
      throw Error(response.statusText);
    }
  } catch (error) {
    console.error("Could not retreive:" + error);
  }
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
    if (response.status >= 200 && response.status <= 299) {
      return response.data;
    } else {
      throw Error(response.statusText);
    }
  } catch (error) {
    console.error("Could not create new todo:" + error);
  }
}

export async function deleteScheme(schemeId) {
  try {
    const response = await axios.delete(`${DB_URL}/schemes/${schemeId}`);
    if (response.status >= 200 && response.status <= 299) {
      return response.data;
    } else {
      throw Error(response.statusText);
    }
  } catch (error) {
    console.error("Could not delete:" + error);
  }
}
