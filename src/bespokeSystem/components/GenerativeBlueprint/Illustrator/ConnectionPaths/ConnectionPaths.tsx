import Path from "./Path";
import { ConnectionPathsProps } from "./_types";

//TO-DO: maybe this file is unneeded. extract content to parent
const ConnectionPaths = ({ nodeConnections }: ConnectionPathsProps) => {
  return Object.entries(nodeConnections).map(([key, line]) => {
    return <Path key={key} line={line} />;
  });
};

export default ConnectionPaths;
