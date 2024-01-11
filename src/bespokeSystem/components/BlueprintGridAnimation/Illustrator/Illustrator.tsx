import BackgroundGridLines from "./BackgroundGridLines";
import Nodes from "./Nodes";
import ConnectionPaths from "./ConnectionPaths";
import SVGFrame from "../SVGFrame";

const Illustrator = ({
  director,
  gridGapSize,
  radiusMultiplier,
  connectionPathMaxLength,
  canvasWidth,
  canvasHeight,
  frameWidth,
  canvasMargin,
}: any) => {
  const { rowCount, columnCount, gridNodes, nodeConnections } = director;
  return (
    <SVGFrame
      canvasWidth={canvasWidth}
      canvasHeight={canvasHeight}
      frameWidth={frameWidth}
      canvasMargin={canvasMargin}
    >
      <BackgroundGridLines
        rowCount={rowCount}
        columnCount={columnCount}
        gridGapSize={gridGapSize}
      />
      {/* rendering ConnectionPaths first to allow Nodes to visually exist above paths */}
      <ConnectionPaths
        gridNodes={gridNodes}
        nodeConnections={nodeConnections}
        gridGapSize={gridGapSize}
        connectionPathMaxLength={connectionPathMaxLength}
      />
      <Nodes
        gridNodes={gridNodes}
        gridGapSize={gridGapSize}
        radiusMultiplier={radiusMultiplier}
      />
    </SVGFrame>
  );
};

export default Illustrator;
