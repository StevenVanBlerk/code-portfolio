import Path from "./Path";

const ConnectionPaths = ({
  nodeConnections,
  connectionMinLength,
  connectionMaxLength,
  gridGapSize,
  stepDuration,
}: any) => {
  return Object.entries(nodeConnections).map(([key, line]: any) => {
    return (
      <Path
        key={key}
        line={line}
        connectionMinLength={connectionMinLength}
        connectionMaxLength={connectionMaxLength}
        gridGapSize={gridGapSize}
        stepDuration={stepDuration}
      />
    );
  });
};

export default ConnectionPaths;
