import { motion } from "framer-motion";
import { useContext } from "react";
import { GlobalValuesContext } from "../helpers/globalValues/globalValues";
import { SVGFrameProps } from "./_types";

const SVGFrame = ({ children }: SVGFrameProps) => {
  const globalValues = useContext(GlobalValuesContext);
  const { canvasHeight, canvasWidth, canvasMargin } = globalValues;

  return (
    <div
      style={{
        height: canvasHeight,
        width: canvasWidth,
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
