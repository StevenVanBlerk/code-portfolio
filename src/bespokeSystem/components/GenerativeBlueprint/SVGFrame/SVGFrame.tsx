import { motion } from "framer-motion";
import { useContext } from "react";
import { GlobalValuesContext } from "../helpers/globalValues/globalValues";
import { SVGFrameProps } from "./_types";

const SVGFrame = ({ children }: SVGFrameProps) => {
  const globalValues = useContext(GlobalValuesContext);
  const { canvasHeight, canvasWidth, canvasMargin } = globalValues;

  const frameHeight = canvasHeight + canvasMargin * 2;
  const frameWidth = canvasWidth + canvasMargin * 2;
  return (
    <div>
      <motion.svg
        width={frameWidth}
        height={frameHeight}
        viewBox={`0 0 ${frameWidth} ${frameHeight}`}
        initial="initial"
        animate="animate"
      >
        {/* centering <g/> within <svg/ */}
        <g transform={`translate(${canvasMargin}, ${canvasMargin})`}>
          {children}
        </g>
      </motion.svg>
    </div>
  );
};

export default SVGFrame;
