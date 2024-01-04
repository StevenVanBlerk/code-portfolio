"use client"; // deactivating SSR. Alternative approach --> https://www.framer.com/motion/component/##server-side-rendering
import Blueprint from "./Blueprint";
import SVGFrame from "./SVGFrame";
import usePositionDirector from "./hooks/usePositionDirector/usePositionDirector";

const BlueprintGridAnimation = () => {
  const positionDirector = usePositionDirector({
    columnCount: 8,
    rowCount: 8,
    nodeCount: 8,
    stepCount: 100,
  });

  return (
    <div style={{ width: "fit-content" }}>
      <SVGFrame>
        {({ canvasWidth, canvasHeight }: any) => (
          <Blueprint //rename to Illustrator?
            positionDirector={positionDirector}
            gridGapSize={100}
            canvasWidth={canvasWidth}
            canvasHeight={canvasHeight}
          />
        )}
      </SVGFrame>
    </div>
  );
};

export default BlueprintGridAnimation;
/**SIGN OFF NOTES:
 * Animation is in a great spot:
 * - movement is random
 * - circles and lines are animating
 *
 * Next to do is just polish.
 * - clean up code
 * - file names
 * - refactor
 * - touch up visuals
 * - fit frame properly
 * 
 */
