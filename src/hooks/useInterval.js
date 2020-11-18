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
