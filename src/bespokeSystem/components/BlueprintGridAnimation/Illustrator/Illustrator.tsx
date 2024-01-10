import BackgroundGridLines from "./BackgroundGridLines";
import Nodes from "./Nodes";
import ConnectingLines from "./ConnectingLines";

const Illustrator = ({ director, gridGapSize, radiusMultiplier }: any) => {
  const { rowCount, columnCount, gridNodes, nodeConnections } = director;
  return (
    <>
      <BackgroundGridLines
        rowCount={rowCount}
        columnCount={columnCount}
        gridGapSize={gridGapSize}
      />
      <ConnectingLines
        nodeConnections={nodeConnections}
        gridGapSize={gridGapSize}
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
