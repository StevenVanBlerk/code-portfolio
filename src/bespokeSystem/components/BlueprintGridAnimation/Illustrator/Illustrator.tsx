import BackgroundGridLines from "./BackgroundGridLines";
import Nodes from "./Nodes";
import ConnectionPaths from "./ConnectionPaths";

const Illustrator = ({
  director,
  gridGapSize,
  radiusMultiplier,
  connectionPathMaxLength,
}: any) => {
  const { rowCount, columnCount, gridNodes, nodeConnections } = director;
  return (
    <>
      <BackgroundGridLines
        rowCount={rowCount}
        columnCount={columnCount}
        gridGapSize={gridGapSize}
      />
      {/* rendering ConnectionPaths first to allow Nodes to visually exist above paths */}
      <ConnectionPaths
        nodeConnections={nodeConnections}
        gridGapSize={gridGapSize}
        connectionPathMaxLength={connectionPathMaxLength}
      />
      <Nodes
        gridNodes={gridNodes}
        gridGapSize={gridGapSize}
        radiusMultiplier={radiusMultiplier}
      />
    </>
  );
};

export default Illustrator;
