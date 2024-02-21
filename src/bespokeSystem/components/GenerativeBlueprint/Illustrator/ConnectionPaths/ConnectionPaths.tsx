import Path from "./Path";

const ConnectionPaths = ({ nodeConnections }) => {
  return Object.entries(nodeConnections).map(([key, line]) => {
    return <Path key={key} line={line} />;
  });
};

export default ConnectionPaths;
