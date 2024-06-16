import { ConnectionPathsProps } from "./_types";
import ConnectionPath from "./ConnectionPath";

//TO-DO: maybe this file is unneeded. extract content to parent
const ConnectionPaths = ({ nodeConnections }: ConnectionPathsProps) => {
  return Object.entries(nodeConnections).map(([key, connection]) => (
    <ConnectionPath key={key} connection={connection} />
  ));
};

export default ConnectionPaths;
