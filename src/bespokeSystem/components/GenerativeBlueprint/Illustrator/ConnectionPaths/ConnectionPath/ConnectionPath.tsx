import { useState, useContext } from "react";
import { motion } from "framer-motion";
import { animateNodeConnection } from "../../../helpers/motionVariants/motionVariants";
import { calculatePathLength, normaliseOpacity } from "../helpers";
import { GlobalValuesContext } from "../../../helpers/globalValues/globalValues";
import { LineCoordinates } from "../_types";
import { NodeConnection } from "../../../_types";

const ConnectionPath = ({ connection }: { connection: NodeConnection }) => {
  const globalValues = useContext(GlobalValuesContext);
  const {
    gridGapSize,
    connectionMinLength,
    connectionMaxLength,
    stepDuration,
  } = globalValues;
  const [x1, setX1] = useState(connection.sequenceA[0].x * gridGapSize);
  const [y1, setY1] = useState(connection.sequenceA[0].y * gridGapSize);
  const [x2, setX2] = useState(connection.sequenceB[0].x * gridGapSize);
  const [y2, setY2] = useState(connection.sequenceB[0].x * gridGapSize);
  const connectionLength = calculatePathLength({ x1, y1, x2, y2 }); //consider memoization/debouncing or other ways to improve performance
  const opacity = normaliseOpacity({
    connectionLength,
    connectionMinLength,
    connectionMaxLength,
  });

  const handleUpdate = ({ x1, y1, x2, y2 }: LineCoordinates) => {
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
        sequenceA: connection.sequenceA,
        sequenceB: connection.sequenceB,
        gridGapSize,
        opacity,
        stepDuration,
      }}
      variants={animateNodeConnection}
      onUpdate={handleUpdate}
    />
  );
};

export default ConnectionPath;
