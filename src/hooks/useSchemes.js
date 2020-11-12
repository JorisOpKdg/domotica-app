import { useEffect, useState } from "react";
import {
  getSchemes,
  putScheme,
  postScheme,
  deleteScheme,
} from "./../api/callSchemes";
import { useInterval } from "./useInterval";

const useSchemes = () => {
  const [schemes, setSchemes] = useState();

  const readAllSchemes = async () => {
    getSchemes().then((response) => setSchemes(response));
  };

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
    setSchemes((previousSchemes) =>
      previousSchemes.map((s) => {
        if (s.id !== scheme.id) return s;
        return scheme;
      })
    );
    return putScheme(scheme);
  };

  const removeScheme = async (schemeId) => {
    setSchemes((previousSchemes) =>
      previousSchemes.filter(({ id }) => id !== schemeId)
    );
    return deleteScheme(schemeId);
  };

  useEffect(() => {
    readAllSchemes();
  }, []);

  useInterval(() => {
    readAllSchemes();
  });

  return {
    schemes,
    readAllSchemes,
    readSchemesOfRoomWithService,
    readScheme,
    createScheme,
    updateScheme,
    removeScheme,
  };
};

export default useSchemes;
