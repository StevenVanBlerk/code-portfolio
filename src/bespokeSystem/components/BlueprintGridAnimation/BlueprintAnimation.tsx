"use client"; // deactivating SSR. Alternative approach --> https://www.framer.com/motion/component/##server-side-rendering

import Illustrator from "./Illustrator";
import SVGFrame from "./SVGFrame";
import useDirector from "./hooks/usePositionDirector/useDirector";

const columnCount = 10;
const rowCount = 10;
const nodeCount = 30; //30;
const stepCount = 10;
const nodeMaxDisplacement = 3; //gaps
const AreNodesSynchronised = false; // TO-DO: set initialDelay to 0 when true
const stepDuration = 2; // TO-DO: drill this down to motionVariants

// Illustration exclusive values
const gridGapSize = 60; //px
const canvasHeight = rowCount * gridGapSize; //px
const canvasWidth = columnCount * gridGapSize; //px
const frameWidth = 0; //px
const canvasMargin = 25; //px
const radiusMultiplier = 5;
const connectionPathMaxLength = 2; //gaps

const BlueprintAnimation = () => {
  const director = useDirector({
    columnCount,
    rowCount,
    nodeCount,
    stepCount,
    nodeMaxDisplacement,
  });

  return (
    <div>
      <SVGFrame
        canvasWidth={canvasWidth}
        canvasHeight={canvasHeight}
        frameWidth={frameWidth}
        canvasMargin={canvasMargin}
      >
        <Illustrator
          director={director}
          gridGapSize={gridGapSize}
          radiusMultiplier={radiusMultiplier}
          canvasWidth={canvasWidth}
          canvasHeight={canvasHeight}
          connectionPathMaxLength={connectionPathMaxLength}
          nodeMaxDisplacement={nodeMaxDisplacement}
        />
      </SVGFrame>
    </div>
  );
};

export default BlueprintAnimation;
/**SIGN OFF NOTES:
 * Next to do is just polish.
 * - refactor styles into classes
 * - replace all instances of "any" type
 * - fix performance bug where many nodes results in connection paths not lining up with center of node
 *      - a potential solution could be disabling illustrator until director has completed
 */

/** Major overhaul thoughts:
 * This project was built in the following order:
 *    - build the grid
 *    - director the nodes
 *    - illustrate the nodes
 *    - director the connections
 *    - illustrate the connection
 * This process has blocked us by making connections dependendant on nodes. Why not direct the connections first and the nodes will know where they are expected to be?
 */
