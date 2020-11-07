import { useEffect, useState } from "react";
import { getSchemes, postScheme, deleteScheme } from "./../api/callSchemes";
import { useInterval } from './useInterval';

const useSchemes = (roomId, service) => {
  const [loading, setLoading] = useState(false);
  const [schemes, setSchemes] = useState();

  const readAllSchemes = async () => {
    setLoading(true);
    getSchemes().then((response) => setSchemes(response));
    setLoading(false);
  };

  const reloadSchemes = () => readAllSchemes();

  const readSchemesOfRoomWithService = (roomId, service) => {
    return schemes.filter(
      (scheme) => scheme.roomId === roomId && scheme.service === service
    );
  };

  const createScheme = async (scheme) => {
    setLoading(true);
    postScheme(scheme).then((response) =>
      setSchemes((previousSchemes) => [...previousSchemes, response])
    );
    setLoading(false);
  };

  const removeScheme = async (scheme) => {
    setLoading(true);
    deleteScheme(scheme).then((response) =>
      console.log("scheme succesfully deleted: " + response)
    );
    setLoading(false);
  };

  useEffect(() => {
    readAllSchemes();
  }, []);

  useInterval(() => {
    readAllSchemes();
  }, [2000])

  return {
    schemes,
    loading,
    readAllSchemes,
    reloadSchemes,
    readSchemesOfRoomWithService,
    createScheme,
    removeScheme,
  };
};

export default useSchemes;
