import { useEffect, useRef } from "react";

export function useInterval(functionToInterval) {
  const savedFunctionToInterval = useRef();

  useEffect(() => {
    savedFunctionToInterval.current = functionToInterval;
  }, [functionToInterval]);

  useEffect(() => {
    const id = setInterval(() => {
      savedFunctionToInterval.current();
    }, 3000);
    return () => {
      clearInterval(id);
    };
  }, [functionToInterval]);
}

// Deze code is geïnspireerd op basis van deze website:
// https://blog.bitsrc.io/polling-in-react-using-the-useinterval-custom-hook-e2bcefda4197