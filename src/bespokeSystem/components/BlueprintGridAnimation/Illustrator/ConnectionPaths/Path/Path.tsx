import { motion, useMotionValue } from "framer-motion";
import { animateNodeConnection } from "../../../helpers/motionVariants";
import { useState } from "react";

const Path = ({ line, gridGapSize, connectionPathMaxLength }: any) => {
  //   const x1 = useMotionValue(1);
  //   console.log("Path", x1.get());
  return (
    <motion.line
      stroke="#fff"
      initial="initial"
      animate={["animateA", "animateB"]}
      custom={{
        sequenceA: line.sequenceA,
        sequenceB: line.sequenceB,
        gridGapSize,
        connectionPathMaxLength,
      }}
      variants={animateNodeConnection}
      //   style={{ x1 }}
    />
  );
};

export default Path;
