import { motion } from "framer-motion";

const SVGFrame = ({
  children,
  canvasHeight,
  canvasWidth,
  frameWidth,
  canvasMargin,
}: any) => {
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
