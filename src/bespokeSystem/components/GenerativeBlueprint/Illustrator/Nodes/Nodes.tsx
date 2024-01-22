import { motion } from "framer-motion";
import {
  animateNodeGroup,
  animateNodeRadius,
} from "../../helpers/motionVariants/motionVariants";

const Nodes = ({
  gridNodes,
  gridGapSize,
  radiusMultiplier,
  stepDuration,
}: any) => {
  return Object.entries(gridNodes).map(([key, node]: any) => {
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
          strokeWidth={1.5}
          fill="transparent"
          initial="initial"
          animate="animate"
          variants={animateNodeRadius}
          custom={{
            sequence: node.sequence,
            radiusMultiplier,
            stepDuration,
          }}
        />
        <circle stroke="#fff" strokeWidth={2} r={1} fill="#fff" />
      </motion.g>
    );
  });
};

export default Nodes;
