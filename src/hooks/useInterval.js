import { useEffect, useRef } from "react";

export function useInterval(callback, delay) {
  const savedCallBack = useRef();
  // Remember the latest callback.
  useEffect(() => {
    savedCallBack.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallBack.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => {
        clearInterval(id);
      };
    }
  }, [callback, delay]);
}

// DEZE CODE IS NIET ZELF GESCHREVEN
// Bron = https://blog.bitsrc.io/polling-in-react-using-the-useinterval-custom-hook-e2bcefda4197
