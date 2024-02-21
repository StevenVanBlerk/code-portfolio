import Path from "./Path";
import { ConnectionPathsProps } from "./_types";

const ConnectionPaths = ({ nodeConnections }: ConnectionPathsProps) => {
  return Object.entries(nodeConnections).map(([key, line]) => {
    return <Path key={key} line={line} />;
  });
};

export default ConnectionPaths;
