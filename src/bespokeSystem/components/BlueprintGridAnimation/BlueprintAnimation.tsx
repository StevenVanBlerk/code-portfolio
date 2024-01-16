"use client"; // deactivating SSR. Alternative approach --> https://www.framer.com/motion/component/##server-side-rendering

import Illustrator from "./Illustrator";
import useDirector from "./hooks/usePositionDirector/useDirector";

//TO-DO: create a context provider to contain these values
const isBackgroundGridDisplayed = false;
const areNodesDisplayed = false;
const areConnectionPathsDisplayed = true;
const columnCount = 19; //10;
const rowCount = 10;
const nodeCount = 30;
const stepCount = 10;
const nodeMaxDisplacement = 3; //gaps
const AreNodesSynchronised = false; // TO-DO: set initialDelay to 0 when true
const stepDuration = 3;
// Illustrator exclusive values
const gridGapSize = 60; //px
const canvasHeight = rowCount * gridGapSize; //px
const canvasWidth = columnCount * gridGapSize; //px
const frameWidth = 0; //px
const canvasMargin = 25; //px
const radiusMultiplier = 5;
const connectionMinLength = 0.5 * gridGapSize;
const connectionMaxLength = 3.5 * gridGapSize;

const BlueprintAnimation = () => {
  const director = useDirector({
    columnCount,
    rowCount,
    nodeCount,
    stepCount,
    nodeMaxDisplacement,
  });

  return (
    <div style={{ opacity: 0.7 }}>
      <Illustrator
        isBackgroundGridDisplayed={isBackgroundGridDisplayed}
        areNodesDisplayed={areNodesDisplayed}
        areConnectionPathsDisplayed={areConnectionPathsDisplayed}
        canvasWidth={canvasWidth}
        canvasHeight={canvasHeight}
        frameWidth={frameWidth}
        canvasMargin={canvasMargin}
        director={director}
        gridGapSize={gridGapSize}
        radiusMultiplier={radiusMultiplier}
        connectionMinLength={connectionMinLength}
        connectionMaxLength={connectionMaxLength}
        nodeMaxDisplacement={nodeMaxDisplacement}
        stepDuration={stepDuration}
      />
    </div>
  );
};

export default BlueprintAnimation;
/**SIGN OFF NOTES:
 * Next to do is just polish.
 * - refactor styles into classes
 * - replace all instances of "any" type
 * - add context state for drilled props
 * - fix performance bug where many nodes results in connection paths not lining up with center of node
 *      - a potential solution could be disabling illustrator until director has completed
 *
 * POSSIBLE ADDITION:
 * - create an opacity filter over the whole animation, then create a "no filter" effect around the mouse cursor. Animation will be grey far from cursor, and white at cursor
 *
 * BACKGROUND THOUGHT:
 * - If the animation is always made to spill over 1 grid gap, resizing the viewport will not be as noticable
 * - The animation still looks great when displaying connection lines but not nodes. Set maxPathLength to a high value (3~4)
 */
