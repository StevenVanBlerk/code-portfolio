"use client";
import { motion } from "framer-motion";

const circleMinWidth = 10; //px

const Circle = ({ FrameMaxWidth }: any) => {
  const initialPositionX = 0;
  const initialPositionY = 0;
  return (
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
  );
};

export default Circle;
