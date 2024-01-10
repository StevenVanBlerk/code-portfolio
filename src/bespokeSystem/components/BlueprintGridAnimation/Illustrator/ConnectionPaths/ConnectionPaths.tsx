import { motion } from "framer-motion";
import { animateNodeConnection } from "../../helpers/motionVariants";

const ConnectionPaths = ({
  nodeConnections,
  gridGapSize,
  connectionPathMaxLength,
}: any) => {
  return Object.entries(nodeConnections).map(([key, line]: any) => {
    return (
      <motion.line
        key={key}
        stroke="#fff"
        custom={{
          sequence: line.sequence,
          gridGapSize,
          connectionPathMaxLength,
        }}
        variants={animateNodeConnection}
      />
    );
  });
};

export default ConnectionPaths;
