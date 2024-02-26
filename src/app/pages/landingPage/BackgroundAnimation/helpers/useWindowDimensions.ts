import { useEffect, useState } from "react";
import { debounce } from "lodash";

const useWindowDimensions = () => {
  const hasWindow = typeof window !== "undefined";
  if (!hasWindow) return;

  const getWindowDimensions = () => {
    return { width: window.innerWidth, height: window.innerHeight };
  };

  const [windowDimensions, setWindowDimensions] = useState({
    width: undefined,
    height: undefined,
  });

  const invalidateWindowDimensions = () => {
    setWindowDimensions(getWindowDimensions());
  };
  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };
    window.addEventListener("resize", debounce(handleResize, 250));
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { windowDimensions, invalidateWindowDimensions };
};

export default useWindowDimensions;
