"use client";

import { motion } from "framer-motion";
import Circle from "./Circle";

const FrameMaxHeight = 1000; //px
const FrameMaxWidth = 500; //px

const Frame = ({ children }: any) => {
  return (
    <div
      style={{
        height: FrameMaxHeight,
        width: FrameMaxWidth,
        background: "white",
        justifySelf: "center",
      }}
    >
      {children}
    </div>
  );
};
const BlueprintGridAnimation = () => {
  const initialPositionX = 0;
  const initialPositionY = 0;
  return (
    <Frame>
      <Circle FrameMaxWidth={FrameMaxWidth} FrameMaxHeight={FrameMaxHeight} />
    </Frame>
  );
};

export default BlueprintGridAnimation;
