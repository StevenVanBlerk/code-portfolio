import { motion } from "framer-motion";

const canvasHeight = 1000; //px
const canvasWidth = 1000; //px
const frameMarginWidth = 20; //px

const SVGFrame = ({ children }: any) => {
  return (
    <div
      style={{
        height: canvasHeight + frameMarginWidth + frameMarginWidth,
        width: canvasWidth + frameMarginWidth + frameMarginWidth,
        background: "orange",
        justifySelf: "center",
        padding: `${frameMarginWidth}px`,
      }}
    >
      <motion.svg
        width={canvasWidth}
        height={canvasHeight}
        viewBox={`0 0 ${canvasWidth} ${canvasHeight}`}
        initial="initial"
        animate="animate"
        style={{
          border: "1px dashed red",
          background: "white",
          // margin: `${frameMarginWidth}px`,
        }}
      >
        {children({ canvasHeight, canvasWidth })}
      </motion.svg>
    </div>
  );
};

export default SVGFrame;
