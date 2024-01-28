import { motion } from "framer-motion";
import { useContext } from "react";
import { GlobalValuesContext } from "../helpers/globalValues";

const SVGFrame = ({ children }: any) => {
  const globalValues = useContext(GlobalValuesContext);
  const { canvasHeight, canvasWidth, canvasMargin, frameWidth } = globalValues;

  return (
    <div
      style={{
        height: canvasHeight + frameWidth + frameWidth,
        width: canvasWidth + frameWidth + frameWidth,
        padding: `${frameWidth}px`,
      }}
    >
      <motion.svg
        width={canvasWidth}
        height={canvasHeight}
        viewBox={`-${canvasMargin} -${canvasMargin} ${canvasWidth} ${canvasHeight}`} // ensuring edges of nodes fit inside canvas
        initial="initial"
        animate="animate"
      >
        {children}
      </motion.svg>
    </div>
  );
};

export default SVGFrame;
