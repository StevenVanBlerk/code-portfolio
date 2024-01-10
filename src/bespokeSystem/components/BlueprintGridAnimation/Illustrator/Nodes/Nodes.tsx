import { motion } from "framer-motion";
import { animateNode } from "../../helpers/motionVariants";

const Nodes = ({ gridNodes, gridGapSize, radiusMultiplier }: any) => {
  return Object.entries(gridNodes).map(([key, node]: any) => {
    return (
      <>
        <motion.circle
          key={`node-${key}`}
          stroke="#000"
          strokeWidth={1.5}
          fill="transparent"
          initial="initial"
          animate="animate"
          variants={animateNode}
          custom={{
            sequence: node.sequence,
            gridGapSize: gridGapSize,
            radiusMultiplier,
          }}
        />
        <motion.circle
          key={`nucleus-${key}`}
          stroke="#000"
          strokeWidth={2}
          r={1}
          fill="#000"
          initial="initial"
          animate="animate"
          variants={animateNode}
          custom={{
            sequence: node.sequence,
            gridGapSize: gridGapSize,
            radiusMultiplier,
            isNucleus: true,
          }}
        />
      </>
    );
  });
};

export default Nodes;
