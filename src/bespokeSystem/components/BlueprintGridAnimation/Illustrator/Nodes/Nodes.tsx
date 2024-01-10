import { motion } from "framer-motion";
import { animateNode } from "../../helpers/motionVariants";

const Nodes = ({ gridNodes, gridGapSize, radiusMultiplier }: any) => {
  return Object.entries(gridNodes).map(([key, node]: any) => {
    return (
      <>
        <motion.circle
          key={`node-${key}`}
          stroke="#fff"
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
          stroke="#fff"
          strokeWidth={2}
          r={1}
          fill="#fff"
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
