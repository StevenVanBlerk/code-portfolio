import { motion } from "framer-motion";
import { animateNodeConnection } from "../../../helpers/motionVariants/motionVariants";
import { useState } from "react";
import { calculatePathLength } from "@/bespokeSystem/helpers/pathHelpers";
import { normaliseOpacity } from "./helpers";

const Path = ({
  line,
  connectionMinLength,
  connectionMaxLength,
  gridGapSize,
  stepDuration,
}: any) => {
  const [x1, setX1] = useState(line.sequenceA[0].x * gridGapSize);
  const [y1, setY1] = useState(line.sequenceA[0].y * gridGapSize);
  const [x2, setX2] = useState(line.sequenceB[0].x * gridGapSize);
  const [y2, setY2] = useState(line.sequenceB[0].x * gridGapSize);
  const connectionLength = calculatePathLength({ x1, y1, x2, y2 }); //consider memoization/debouncing or other ways to improve performance
  const opacity = normaliseOpacity({
    connectionLength,
    connectionMinLength,
    connectionMaxLength,
  });

  const handleUpdate = ({ x1, y1, x2, y2 }: any) => {
    setX1(x1);
    setY1(y1);
    setX2(x2);
    setY2(y2);
  };
  return (
    <motion.line
      stroke="#fff"
      initial="initial"
      animate={["animateA", "animateB", "animateOpacity"]}
      custom={{
        sequenceA: line.sequenceA,
        sequenceB: line.sequenceB,
        gridGapSize,
        opacity,
        stepDuration,
      }}
      variants={animateNodeConnection}
      onUpdate={handleUpdate}
    />
  );
};

export default Path;
