import { useEffect, useState } from "react";
import { getSchemes, putScheme, postScheme, deleteScheme } from "./../api/callSchemes";
import { useInterval } from "./useInterval";

const useSchemes = () => {
  const [schemes, setSchemes] = useState();

  const readAllSchemes = async () => {
    getSchemes().then((response) => setSchemes(response));
  };

  const reloadSchemes = () => readAllSchemes();

  const readSchemesOfRoomWithService = (roomId, service) => {
    return schemes.filter(
      (scheme) => scheme.roomId === roomId && scheme.service === service
    );
  };

  const readScheme = (schemeId) => {
    return schemes.find((scheme) => scheme.id === +schemeId);
  };

  const createScheme = async (scheme) => {
    postScheme(scheme).then((response) =>
      setSchemes((previousSchemes) => [...previousSchemes, response])
    );
  };

  const updateScheme = async (scheme) => {
    putScheme(scheme).then((scheme) =>
      setSchemes((previousSchemes) => [...previousSchemes, scheme])
    );
  };

  const removeScheme = async (schemeId) => {
    deleteScheme(schemeId).then(() => reloadSchemes());
  };

  useEffect(() => {
    readAllSchemes();
  }, []);

  useInterval(() => {
    readAllSchemes();
  }, [2000]);

  return {
    schemes,
    readAllSchemes,
    reloadSchemes,
    readSchemesOfRoomWithService,
    readScheme,
    createScheme,
    updateScheme,
    removeScheme,
  };
};

export default useSchemes;
