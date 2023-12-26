"use client";

import { motion } from "framer-motion";

const FrameMaxHeight = 1000; //px
const FrameMaxWidth = 500; //px

const circleMinWidth = 10; //px
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
const FramerDemo = () => {
  const initialPositionX = 0;
  const initialPositionY = 0;
  return (
    <Frame>
      <motion.div
        transition={{ repeat: Infinity, duration: 2 }}
        initial={{ x: initialPositionX, y: initialPositionY }}
        animate={{
          scale: [1, 2, 2, 1, 1],
          x: initialPositionX + FrameMaxWidth,
          y: initialPositionY + 0,
        }}
        style={{
          background: "pink",
          height: circleMinWidth,
          width: circleMinWidth,
          borderRadius: "50%",
        }}
      />
    </Frame>
  );
};

export default FramerDemo;
