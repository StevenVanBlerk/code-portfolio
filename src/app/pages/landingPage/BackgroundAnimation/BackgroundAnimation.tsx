"use client";

import GenerativeBlueprint from "@/bespokeSystem/components/GenerativeBlueprint/GenerativeBlueprint";
import useWindowDimensions from "./helpers/useWindowDimensions";
import { useEffect } from "react";

const BackgroundAnimation = () => {
  const { windowDimensions, invalidateWindowDimensions } =
    useWindowDimensions();
  useEffect(() => {
    invalidateWindowDimensions();
  }, []);

  return (
    <div>
      <span
        style={{
          position: "absolute",
          left: "0",
        }}
      >
        <GenerativeBlueprint />
      </span>

      <span
        style={{
          position: "absolute",
          right: "0",
        }}
      >
        <GenerativeBlueprint />
      </span>
    </div>
  );
};

export default BackgroundAnimation;
