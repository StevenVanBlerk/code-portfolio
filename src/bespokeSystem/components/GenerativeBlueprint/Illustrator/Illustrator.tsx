import BackgroundGridLines from "./BackgroundGridLines";
import Nodes from "./Nodes";
import ConnectionPaths from "./ConnectionPaths";
import SVGFrame from "../SVGFrame";
import { AnimatePresence } from "framer-motion";

const Illustrator = ({
  isBackgroundGridDisplayed,
  areNodesDisplayed,
  areConnectionPathsDisplayed,
  director,
  gridGapSize,
  radiusMultiplier,
  connectionMinLength,
  connectionMaxLength,
  canvasWidth,
  canvasHeight,
  frameWidth,
  canvasMargin,
  stepDuration,
}: any) => {
  const { rowCount, columnCount, gridNodes, nodeConnections } = director;
  return (
    <SVGFrame
      canvasWidth={canvasWidth}
      canvasHeight={canvasHeight}
      frameWidth={frameWidth}
      canvasMargin={canvasMargin}
    >
      {isBackgroundGridDisplayed && (
        <BackgroundGridLines
          rowCount={rowCount}
          columnCount={columnCount}
          gridGapSize={gridGapSize}
        />
      )}
      {/* rendering ConnectionPaths first to allow Nodes to visually exist above paths */}
      {areConnectionPathsDisplayed && (
        <ConnectionPaths
          nodeConnections={nodeConnections}
          connectionMinLength={connectionMinLength}
          connectionMaxLength={connectionMaxLength}
          gridGapSize={gridGapSize}
          stepDuration={stepDuration}
        />
      )}
      {areNodesDisplayed && (
        <Nodes
          gridNodes={gridNodes}
          gridGapSize={gridGapSize}
          radiusMultiplier={radiusMultiplier}
          stepDuration={stepDuration}
        />
      )}
    </SVGFrame>
  );
};

export default Illustrator;
