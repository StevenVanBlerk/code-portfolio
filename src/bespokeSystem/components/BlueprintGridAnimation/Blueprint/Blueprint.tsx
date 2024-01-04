import BackgroundGridLines from "./BackgroundGridLines";
import Nodes from "./Nodes";
import ConnectingLines from "./ConnectingLines";

const Blueprint = ({ positionDirector, gridGapSize }: any) => {
  const { rowCount, columnCount, gridNodes, nodeConnections } =
    positionDirector;
  return (
    <>
      <BackgroundGridLines
        rowCount={rowCount}
        columnCount={columnCount}
        gridGapSize={gridGapSize}
      />
      <Nodes gridNodes={gridNodes} gridGapSize={gridGapSize} />
      <ConnectingLines
        nodeConnections={nodeConnections}
        gridGapSize={gridGapSize}
      />
    </>
  );
};

export default Blueprint;
