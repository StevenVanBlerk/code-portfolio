import BackgroundGridLines from "./BackgroundGridLines";
import Nodes from "./Nodes";

const Blueprint = ({
  positionDirector,
  canvasWidth,
  canvasHeight,
  gridGapSize,
}: any) => {
  const { rowCount, columnCount, gridNodes } = positionDirector;

  return (
    <>
      <BackgroundGridLines
        rowCount={rowCount}
        columnCount={columnCount}
        gridGapSize={gridGapSize}
      />
      <Nodes gridNodes={gridNodes} gridGapSize={gridGapSize} />
    </>
  );
};

export default Blueprint;
