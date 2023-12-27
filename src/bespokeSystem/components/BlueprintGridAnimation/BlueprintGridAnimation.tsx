"use client"; // deactivating SSR. Alternative approach --> https://www.framer.com/motion/component/##server-side-rendering

import { motion } from "framer-motion";
import Grid from "./Grid";

const frameHeight = 1000; //px
const frameWidth = 1000; //px

const Frame = ({ children }: any) => {
  return (
    <div
      style={{
        height: frameHeight,
        width: frameWidth,
        background: "white",
        justifySelf: "center",
      }}
    >
      {children}
    </div>
  );
};
const BlueprintGridAnimation = () => {
  return (
    <Frame>
      <Grid frameWidth={frameWidth} frameHeight={frameHeight} />
    </Frame>
  );
};

export default BlueprintGridAnimation;
