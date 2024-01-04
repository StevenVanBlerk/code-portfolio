import { motion } from "framer-motion";
import { moveCircle } from "../../helpers/motionVariants";

const Nodes = ({ gridNodes, gridGapSize }: any) => {
  return Object.entries(gridNodes).map(([key, node]: any) => {
    return (
      <motion.circle
        key={key}
        r="10"
        stroke="#00f"
        fill="#00f"
        initial="initial"
        animate="animate"
        variants={moveCircle}
        custom={{
          sequence: node.sequence,
          gridGapSize: gridGapSize,
        }}
      />
    );
  });
};

export default Nodes;
