"use client";
import { useEffect, useState } from "react";
import { debounce } from "lodash";

const useWindowDimensions = () => {
  const initialDimensions = { width: null, height: null };
  const [windowDimensions, setWindowDimensions] = useState<{
    width: number | null;
    height: number | null;
  }>(initialDimensions);

  useEffect(() => {
    invalidateWindowDimensions();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };
    window.addEventListener("resize", debounce(handleResize, 250)); //debouncing to delay rerender till the user has stopped resizing
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const invalidateWindowDimensions = () => {
    setWindowDimensions(getWindowDimensions());
  };

  const getWindowDimensions = () => {
    return { width: window.innerWidth, height: window.innerHeight };
  };

  // returning placeholder values until hook is fully initialised
  const hasWindow = typeof window !== "undefined";
  if (!hasWindow) {
    return {
      windowDimensions: initialDimensions,
      invalidateWindowDimensions: () => {},
    };
  }

  return { windowDimensions, invalidateWindowDimensions };
};

export default useWindowDimensions;
