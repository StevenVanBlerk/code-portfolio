import BackgroundGridLines from "./BackgroundGridLines";
import Nodes from "./Nodes";
import ConnectionPaths from "./ConnectionPaths";
import SVGFrame from "../SVGFrame";
import { GlobalValuesContext } from "../helpers/globalValues/globalValues";
import { useContext } from "react";
import { IllustratorProps } from "./_types";

const Illustrator = ({ director }: IllustratorProps) => {
  const globalValues = useContext(GlobalValuesContext);
  const {
    isBackgroundGridDisplayed,
    areConnectionPathsDisplayed,
    areNodesDisplayed,
  } = globalValues;
  const { gridNodes, nodeConnections } = director;
  return (
    <SVGFrame>
      {isBackgroundGridDisplayed && <BackgroundGridLines />}
      {/* rendering ConnectionPaths first to allow Nodes to visually exist above paths */}
      {areConnectionPathsDisplayed && (
        <ConnectionPaths nodeConnections={nodeConnections} />
      )}
      {areNodesDisplayed && <Nodes gridNodes={gridNodes} />}
    </SVGFrame>
  );
};

export default Illustrator;
