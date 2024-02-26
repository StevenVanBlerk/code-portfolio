import { motion } from "framer-motion";
import {
  animateNodeGroup,
  animateNodeRadius,
} from "../../helpers/motionVariants/motionVariants";
import { useContext } from "react";
import { GlobalValuesContext } from "../../helpers/globalValues/globalValues";
import { NodesProps } from "./_types";

const Nodes = ({ gridNodes }: NodesProps) => {
  const globalValues = useContext(GlobalValuesContext);
  const { gridGapSize, stepDuration, nodeRadiusMultiplier } = globalValues;
  return Object.entries(gridNodes).map(([key, node]) => {
    return (
      <motion.g
        key={`node-${key}`}
        initial="initial"
        animate="animate"
        variants={animateNodeGroup}
        custom={{
          sequence: node.sequence,
          gridGapSize: gridGapSize,
          stepDuration,
        }}
      >
        <motion.circle
          stroke="#fff"
          strokeWidth={0.5}
          fill="transparent"
          initial="initial"
          animate="animate"
          variants={animateNodeRadius}
          custom={{
            sequence: node.sequence,
            nodeRadiusMultiplier,
            stepDuration,
          }}
        />
        {/* <circle stroke="#fff" strokeWidth={2} r={1} fill="#fff" /> */}
        <circle stroke="#fff" strokeWidth={1} r={0.1} fill="#fff" />
      </motion.g>
    );
  });
};

export default Nodes;
