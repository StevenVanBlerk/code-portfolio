import Path from "./Path";

const ConnectionPaths = ({
  nodeConnections,
  gridGapSize,
  connectionPathMaxLength,
  gridNodes,
}: any) => {
  return Object.entries(nodeConnections).map(([key, line]: any) => {
    return (
      <Path
        key={key}
        line={line}
        gridGapSize={gridGapSize}
        connectionPathMaxLength={connectionPathMaxLength}
      />
    );
  });
};

export default ConnectionPaths;
