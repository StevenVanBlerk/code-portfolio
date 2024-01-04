import { motion } from "framer-motion";
import { moveNodeConnection } from "../../helpers/motionVariants";

const ConnectingLines = ({ nodeConnections, gridGapSize }: any) => {
  return Object.entries(nodeConnections).map(([key, line]: any) => {
    return (
      <motion.line
        key={key} //?
        stroke="#f00"
        custom={{ sequence: line.sequence, gridGapSize }}
        variants={moveNodeConnection}
      />
    );
  });
};

export default ConnectingLines;
