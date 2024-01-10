"use client"; // deactivating SSR. Alternative approach --> https://www.framer.com/motion/component/##server-side-rendering

import Illustrator from "./Illustrator";
import SVGFrame from "./SVGFrame";
import useDirector from "./hooks/usePositionDirector/useDirector";

const columnCount = 10;
const rowCount = 10;
const nodeCount = 20;
const stepCount = 10;

// Illustration values
const gridGapSize = 100; //px
const canvasHeight = rowCount * gridGapSize; //px
const canvasWidth = columnCount * gridGapSize; //px
const frameWidth = 0; //px
const canvasMargin = 25; //px
const radiusMultiplier = 5;

const BlueprintAnimation = () => {
  const director = useDirector({ columnCount, rowCount, nodeCount, stepCount });

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
        />
      </SVGFrame>
    </div>
  );
};

export default BlueprintAnimation;
/**SIGN OFF NOTES:
 * Next to do is just polish.
 * - clean up code
 * - file names
 * - refactor
 * - touch up visuals
 * - fit frame properly
 *
 */
