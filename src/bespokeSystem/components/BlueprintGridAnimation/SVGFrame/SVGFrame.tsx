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
        background: "white",
        padding: `${frameWidth}px`,
      }}
    >
      <motion.svg
        width={canvasWidth}
        height={canvasHeight}
        viewBox={`-${canvasMargin} -${canvasMargin} ${canvasWidth} ${canvasHeight}`}
        // viewBox={`0 0 ${canvasWidth} ${canvasHeight}`}
        initial="initial"
        animate="animate"
      >
        {children}
      </motion.svg>
    </div>
  );
};

export default SVGFrame;
