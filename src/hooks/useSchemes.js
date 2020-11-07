import { useEffect, useState } from "react";
import axios from "axios";
import { DB_URL } from "../database/db";

const useSchemes = () => {
  const [loading, setLoading] = useState(false);
  const [schemes, setSchemes] = useState();

  const getSchemes = async (roomId, service) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${DB_URL}/schemes?roomId=${roomId}&service=${service}`
      );
      setSchemes(response.data);
    } catch (error) {
      console.error("Could not load schemes:" + error);
    }
    setLoading(false);
  };

  const reloadSchemes = (roomId, service) => getSchemes(roomId, service);

  const postScheme = async (scheme) => {
    setLoading(true);
    const { roomId, service, amount, start, end } = scheme;
    try {
      const scheme = await axios.post(`${DB_URL}/schemes`, {
        roomId,
        service,
        amount,
        start,
        end,
      });
      reloadSchemes(roomId, scheme);
    } catch (error) {
      console.error("Could not create new scheme:" + error);
    }
    setLoading(false);
  };
  /*
  const putScheme = async (scheme) => {
    setLoading(true);
    const { roomId, service, amount, start, end } = scheme;
    try {
      const scheme = await axios.put(`${DB_URL}/schemes/${schemeId}`, {
        roomId,
        service,
        amount,
        start,
        end,
      });
      setSchemes((previousSchemes) => [...previousSchemes, scheme]);
    } catch (error) {
      console.error("Could not change scheme" + error);
    }
    setLoading(false);
  };
  */

  const deleteScheme = async (scheme) => {
    setLoading(true);
    try {
      //TODO: if response != 200 --> throw error or something
      const response = await axios.delete(`${DB_URL}/schemes/${scheme.id}`);
      reloadSchemes(scheme.roomId, scheme.service);
    } catch (error) {
      console.error("Could not delete:" + error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getSchemes(roomId, service);
  }, [roomId, service]);

  return {
    schemes,
    loading,
    getSchemes,
    reloadSchemes,
    postScheme,
    deleteScheme,
  };
};

export default useSchemes;
