import Path from "./Path";

const ConnectionPaths = ({ nodeConnections }: any) => {
  return Object.entries(nodeConnections).map(([key, line]: any) => {
    return <Path key={key} line={line} />;
  });
};

export default ConnectionPaths;
